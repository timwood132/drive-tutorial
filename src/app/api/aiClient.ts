import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

type AIClient = ReturnType<typeof ModelClient>;

export const client: AIClient = ModelClient(
  "https://models.inference.ai.azure.com",
  new AzureKeyCredential(process.env.GITHUB_TOKEN!),
);
