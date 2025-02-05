import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "~/db";
import { usersTable } from "~/db/schema";
import { eq } from "drizzle-orm";
// import { createUserInDatabase } from "@/lib/db"; // Your database function

export default async function AuthTest() {
  // Get authentication info
  const userAuth = await auth();

  console.log(userAuth);

  if (!userAuth) {
    return <p>User not authenticated</p>;
  }

  const user = await currentUser();
  console.log("🚀 ~ AuthTest ~ user:", user);

  if (!user) {
    return <p>User not found</p>;
  }

  const dbUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.userId, user.id));
  console.log("🚀 ~ AuthTest ~ dbUser:", dbUser);

  if (!dbUser.length) {
    await db.insert(usersTable).values({
      userId: user.id,
      username: user.username ?? "",
      email: user.primaryEmailAddress?.emailAddress ?? "",
    });
  }

  return <p>Welcome, {user?.username}!</p>;
}
