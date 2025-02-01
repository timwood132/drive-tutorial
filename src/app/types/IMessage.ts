export interface IMessage {
  role: "user" | "assistant" | "system"; // The role of the speaker
  content: string; // The actual message content
}
