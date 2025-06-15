import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

let client: MongoClient | null = null;

export async function connectToDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log("✅ MongoDB подключен!");
  }
  return client.db(); // Можно добавить имя базы, если не в URI
}
