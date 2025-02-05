"use client";
import { useUser } from "@clerk/nextjs";

const UserTest = () => {
  const { user } = useUser();
  console.log(user);
  return <div>UserTest</div>;
};

export default UserTest;
