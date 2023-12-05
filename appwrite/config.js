import { Client } from "appwrite";
import { Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_PROJECT_ID);

export default client;
export const account = new Account(client);
export const databases = new Databases(client);

export const APPWRITE_IDS = {
  DATABASE: "finance",
  COLLECTIONS: {
    USERS: "users",
    INCOME: "income",
    BUDGET: "budget",
    TRANSACTION: "transaction",
    TRANSACTION_STATS: "transaction_stats"
  }
};
