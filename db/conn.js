import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const connectionString =process.env.MONGO_URL || "";

const client = new MongoClient(connectionString);

let conn;

try {
 conn = await client.connect();
}catch(error) {
    console.error(error);
    process.exit(1); //shuts down the whole server cuz of an error
}

let db = conn.db("SBA-319")

export default db;