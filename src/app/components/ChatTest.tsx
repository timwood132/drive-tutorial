// import { postsTable, usersTable } from "~/db/schema";
import Form from "next/form";
// import { db } from "~/db";
import { beginChat } from "../api/beginChat";

const ChatTest = () => {
  return (
    <Form
      action={
        //     async () => {
        //     "use server";
        //     await db.insert(usersTable).values({
        //       id: 1,
        //       name: "test",
        //       age: 1,
        //       email: "test@test.com",
        //     });
        //     await db.insert(postsTable).values({
        //       title: "test",
        //       content: "test",
        //       userId: 1,
        //     });
        //   }
        beginChat
      }
    >
      <input style={{ color: "black" }} type="text" name="message" />
      <button type="submit">Click me</button>
    </Form>
  );
};

export default ChatTest;
