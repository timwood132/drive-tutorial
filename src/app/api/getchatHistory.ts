import { chats_table } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { type IMessage } from "../types/IMessage";

export async function getChatHistory(
  chatId: string,
): Promise<IMessage[] | null> {
  const chat = await db
    .select()
    .from(chats_table)
    .where(eq(chats_table.chat_id, chatId));

  if (chat.length === 0) {
    return null;
  }

  return chat[0]?.chat_data as IMessage[];
}
