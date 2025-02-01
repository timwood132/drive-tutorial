import { chats_table } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { getChatHistory } from "./getchatHistory";

import ModelClient, {
  type GetChatCompletions200Response,
  type GetChatCompletionsDefaultResponse,
  type ChatCompletionsOutput,
} from "@azure-rest/ai-inference";
import type { ErrorResponse } from "@azure-rest/core-client";
import { AzureKeyCredential } from "@azure/core-auth";
import type { IMessage } from "../types/IMessage";

// To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings.
// Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

type AIClient = ReturnType<typeof ModelClient>; // Extract correct type

const client: AIClient = ModelClient(
  "https://models.inference.ai.azure.com",
  new AzureKeyCredential(process.env.OPENAI_TOKEN ?? ""),
);

export async function addMessageToChat(chatId: string, userMessage: string) {
  const chat = await getChatHistory(chatId);
  if (!chat) {
    throw new Error("Chat not found!");
  }

  // Append new user message
  chat.push({ role: "user", content: userMessage });

  // Send updated messages to OpenAI
  const response:
    | GetChatCompletions200Response
    | GetChatCompletionsDefaultResponse = await client
    .path("/chat/completions")
    .post({
      body: {
        messages: chat, // Send full conversation
        model: "gpt-4o-mini",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      },
    });

  const responseBody: ChatCompletionsOutput | ErrorResponse = response.body;

  if ("error" in responseBody) {
    throw new Error(responseBody.error.message);
  }

  const assistantMessage = responseBody.choices[0]?.message as IMessage;

  // Append assistant's reply
  chat.push(assistantMessage);

  // Update chat history in the database
  await db
    .update(chats_table)
    .set({ chat_data: chat })
    .where(eq(chats_table.chat_id, chatId));

  return assistantMessage.content; // Return the AI's response
}
