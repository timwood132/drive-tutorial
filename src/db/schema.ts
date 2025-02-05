import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").unique().notNull(),
  userId: text("user_id").unique().notNull(),
});

export const chatsTable = sqliteTable("chats", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.userId, { onDelete: "cascade" }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof chatsTable.$inferInsert;
export type SelectPost = typeof chatsTable.$inferSelect;
