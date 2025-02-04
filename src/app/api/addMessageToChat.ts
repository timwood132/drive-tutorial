// import { eq } from "drizzle-orm";
// import { getChatHistory } from "./getchatHistory";

// import ModelClient, {
//   type GetChatCompletions200Response,
//   type GetChatCompletionsDefaultResponse,
//   type ChatCompletionsOutput,
// } from "@azure-rest/ai-inference";
// import type { ErrorResponse } from "@azure-rest/core-client";
// import { AzureKeyCredential } from "@azure/core-auth";
// import type { IMessage } from "../types/IMessage";
// import { createSseStream } from "@azure/core-sse";
// import { client } from "./aiClient";

// export async function addMessageToChat(chatId: string, userMessage: string) {
//   const chat = await getChatHistory(chatId);
//   if (!chat) {
//     throw new Error("Chat not found!");
//   }

//   // Append new user message
//   chat.push({ role: "user", content: userMessage });

//   // Send updated messages to OpenAI
//   const response = await client
//     .path("/chat/completions")
//     .post({
//       body: {
//         messages: [
//           {
//             role: "user",
//             content: "Give me 5 good reasons why I should exercise every day.",
//           },
//         ],
//         model: "DeepSeek-R1",
//         stream: true,
//       },
//     })
//     .asNodeStream();

//     const stream = response.body;
//     if (!stream) {
//       throw new Error("The response stream is undefined");
//     }

//     if (response.status !== "200") {
//       stream.destroy();
//       throw new Error(
//         `Failed to get chat completions, http operation failed with ${response.status} code`,
//       );
//     }

//     const sseStream = createSseStream(stream);

//     for await (const event of sseStream) {
//       if (event.data === "[DONE]") {
//         return;
//       }
//       for (const choice of JSON.parse(event.data).choices) {
//         process.stdout.write(choice.delta?.content ?? ``);
//       }
//     }

//   const assistantMessage = responseBody.choices[0]?.message as IMessage;

//   // Append assistant's reply
//   chat.push(assistantMessage);

//   // Update chat history in the database
//   await db
//     .update(chats_table)
//     .set({ chat_data: chat })
//     .where(eq(chats_table.chat_id, chatId));

//   return assistantMessage.content; // Return the AI's response
// }
