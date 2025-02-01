import { chats_table } from "~/server/db/schema";
import { v4 as uuidv4 } from "uuid";
import { db } from "~/server/db";

export async function startNewChat() {
  const chatId = uuidv4();

  const initialMessages = [
    { role: "system", content: "You are a helpful assistant." },
  ];

  await db.insert(chats_table).values({
    chat_id: chatId,
    chat_data: initialMessages,
  });

  return chatId;
}
