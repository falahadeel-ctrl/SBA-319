import express from "express";
import db from "./conn.js";

const PORT = 3001;
const app = express();

app.use(express.json());

// Add validation - IMMEDIATELY INVOKED
(async () => {
  await db.command({
    collMod: "animals",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        title: "Animal Validation",
        required: ["name"],
        properties: {
          name: {
            bsonType: "string",
            description: "'name' is required and must be a string",
          }
        }
      }
    }
  });
  console.log("✅ Validation added!");
})(); // ← Added () to CALL the function!

// Test the validation
app.get("/", async (req, res) => {
  let collection = await db.collection("animals");
  let newDocument = {
    name: 123 // ❌ Invalid - number instead of string
  };

  let result = await collection.insertOne(newDocument).catch((e) => {
    return e.errInfo.details.schemaRulesNotSatisfied;
  });
  res.send(result).status(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});