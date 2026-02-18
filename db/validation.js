import db from './conn.js';

async function addValidation(){
    try{
        await db.command({ //what is command,collMod,validationAction,$jsonSchema,?
            collMod: "animals",
            validator: {
                $jsonSchema: {
                        bsonType: "object",
                        required: ["name"],
                        properties: {
                            name: {
                                bsonType: "String"
                            }
                        }
                }
            },
            valitionAction: "error"
        });
        console.log("validation added");
        process.exit(0);
    } catch (error){
        console.error("error", error.message);
        process.exit(1);
    }
}

addValidation();