import express from "express";
import db from "./conn.js";

const PORT = 3001;
const app = express();

app.use(express.json());

(async () => {
  await db.command({ //what is command means executing this databse just as given/wrriten
    collMod: "animals",  // collMod tells which collection in mongodb is to be modified
    validator: {   //now actually applying validation useing validator
      $jsonSchema: {   //validate useing JSON schema rules
        bsonType: "object",   //datatype Mongodb expects in database which is object in our case
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
})
(); 
// () to CALL the function

// Test the validation
app.get("/", async (req, res) => {
  let collection = await db.collection("animals");
  let newDocument = {
    name: 123 // ❌ inserting Invalid data on purpose to test validation by inserting number instead of string
  };

  let result = await collection.insertOne(newDocument)
  .catch((e) => {   //if an error happens catch it and return only the validation error details
    return e.errInfo.details.schemaRulesNotSatisfied;
  });
  res.send(result).status(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});