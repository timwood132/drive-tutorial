// "use server";

// import { v4 as uuidv4 } from "uuid";
// import { db } from "~/server/db";
// import { chats_table } from "~/server/db/schema";

// export async function startNewChat(formData: FormData) {
//   const message = formData.get("message");
//   const chatId = uuidv4();

//   const initialMessages = [
//     { role: "system", content: "You are a helpful assistant." },
//     { role: "user", content: message },
//   ];

//   await db.insert(chats_table).values({
//     chat_id: chatId,
//     chat_data: initialMessages,
//   });
// }
