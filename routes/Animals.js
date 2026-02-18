import express from `express`;
import conn from `../db/conn.js`;

const router = express.Router();

//getting all the animals
router.get(`/`, async function(req,res){
    try{
const animals = db.collection(`animals`).find([]).toArray();
res.json(animals);
    }catch(err){
res.status(500).json({err.message});
    }
});

//post new animal
router.post(`/`,async (req,res)=>{
    let newAnimal = req.body;
    let collection = await db.collection(`animals`);
    let result = await collection.insertOne(`newAnimal`);
   res.json(result);
});

//updating animals
router.patch(``)