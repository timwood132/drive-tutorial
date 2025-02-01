import {
  singlestoreTableCreator,
  varchar,
  json,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator((name) => `lumi_${name}`);

export const chats_table = createTable("chats_table", {
  chat_id: varchar("chat_id", { length: 255 }).primaryKey(), // String with a max length of 255
  chat_data: json("chat_data"), // JSON column
});
