import db from './conn.js';

async function addValidation() {
    try {
        await db.command({ //what is command means executing this databse just as given/wrriten
            collMod: "animals", // collMod tells which collection in mongodb is to be modified
            validator: {  //now actually applying validation useing validator
          
        
                $jsonSchema: {   //validate useing JSON schema rules
                    bsonType: "object",
                    required: ["name"],
                    properties: {
                        name: {
                            bsonType: "String"
                        }
                    }

                }
            }
            // valitionAction: "error"   //tells what happens if incase validation fails
        });
        console.log("validation added");
        process.exit(0);
    } catch (error) {
        console.error("error", error.message);
        process.exit(1);
    }
}

addValidation();