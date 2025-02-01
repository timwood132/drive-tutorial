import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "singlestore",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    host: "svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com",
    user: "netlify-deployment",
    password: "8Z8rVRoTLlboP3RNDmEpFSryJIdgIbVH",
    port: 3333,
    database: "db_933ec",
    ssl: {},
  },
});
