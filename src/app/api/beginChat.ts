"use server";

import { client } from "./aiClient";
// import type { ChatCompletionsOutput } from "@azure-rest/ai-inference";
import { createSseStream, type EventMessageStream } from "@azure/core-sse";
import type { IncomingMessage } from "http";

// Define message structure
type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

// Define request body structure
type ChatCompletionRequest = {
  messages: Message[];
  temperature: number;
  top_p: number;
  model: string;
  max_tokens: number;
  stream: boolean;
};

export async function beginChat(_messages: Message[]): Promise<void> {
  const messages: Message[] = [
    { role: "system", content: "" },
    {
      role: "user",
      content: "Can you explain the basics of machine learning?",
    },
  ];

  const requestBody: ChatCompletionRequest = {
    messages,
    model: "gpt-4o",
    temperature: 1,
    max_tokens: 4096,
    top_p: 1,
    stream: true,
  };

  const response = await client
    .path("/chat/completions")
    .post({
      body: requestBody,
    })
    .asNodeStream();

  const stream = response.body as IncomingMessage;
  if (!stream) {
    throw new Error("The response stream is undefined");
  }

  if (response.status !== "200") {
    stream.destroy();
    throw new Error(
      `Failed to get chat completions, http operation failed with ${response.status} code`,
    );
  }

  const sseStream: EventMessageStream = createSseStream(stream);

  interface StreamChatCompletion {
    choices: Array<{
      delta: {
        content?: string;
      };
    }>;
  }

  let chat = "";

  for await (const event of sseStream) {
    const eventData =
      typeof event.data === "string"
        ? event.data
        : new TextDecoder().decode(event.data);

    if (eventData === "[DONE]") {
      messages.push({ role: "assistant", content: chat });
      //   await db.insert(chatsTable).values({
      //     title: "Chat Title",
      //     content: "Chat Content",
      //     userId: someUserId, // Replace with actual userId
      //   });
      return;
    }

    try {
      const parsedData = JSON.parse(eventData) as StreamChatCompletion;
      for (const choice of parsedData.choices ?? []) {
        const content = choice.delta?.content ?? "";
        chat = chat + content;
        process.stdout.write(content);
      }
    } catch (error) {
      console.error("Failed to parse event data:", error);
    }
  }

  console.log(chat);

  //   if (response.status !== "200") {
  //     const errorResponse = response.body as ErrorResponse;
  //     throw new Error(errorResponse.error?.message || "Unknown error");
  //   }

  //   const responseBody = response.body as ChatCompletionsOutput;
  //   console.log(responseBody.choices[0]?.message.content);
}

// beginChat().catch((err: unknown) => {
//   console.error("The sample encountered an error:", err);
// });
