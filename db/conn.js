import { MongoClient } from "mongodb";

const connectionString ="mongodb+srv://falahadeel:funzi123@cluster0.eij8nn1.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;

try {
 conn = await client.connect();
}catch(error) {
    console.error(error);
    process.exit(1); //shuts down the whole server cuz of an error
}

let db = conn.db("test_db")

