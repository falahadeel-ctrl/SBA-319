import express from 'express';
// import conn from `../db/conn.js`;
import db from '../db/conn';

const router = express.Router();

//getting all the animals
router.get(`/`, async function(req,res){
    try{
const animals = await db.collection(`animals`).find({}).toArray();
res.json(animals);
    }catch(err){
res.status(500).json({error:err.message});
    }
});

//post new animal
router.post(`/`,async (req,res)=>{
    let newAnimal = req.body;
    let collection = await db.collection(`animals`);
    let result = await collection.insertOne("newAnimal");
   res.json(result);
});

//updating animals
router.patch('/:name',async (req, res)=>{
    let collection =  await db.collection(`animals`);
    let result = await collection.findOneAndUpdate(
        {name: required.params.name},
        {$set: req.body}
    );
    res.json(result);
});

router.delete('/:name', async(req, res)=>{
    let collection = await db.collection(`animals`);
    let result = await db.collection.deleteOne({name: req.params.name});
    res.json(result);
});

export default router;