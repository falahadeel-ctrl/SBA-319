import express from 'express';
import db from '../db/conn.js';

const router = express.Router(); //modular route handler

//getting all food

router.get('/',async (req,res)=>{
let collection = await db.collection(`food`);
let result= await db.collection.find({}).toArray();
res.json(result);
});

//posting new food

router.post('/', async function (req, res){
    let collection = await db.collection('food');
    let result = await db.collection.insertOne(newFood);
    res.json(result);
})

//updateing food

router.put('/',async(req, res){
    let collection = await db.collection('food');
    let result = await db.collection.findOneAndUpdate(
        {name: req.params.name},
        {$set: req.body}
    );
    res.json(result);
});

//deleteing food

router.delete('/',async (req, res)=>{
    let collection= await db.collection('food');
    let result = await collection.deleteOne({name: req.params.name});
    res.json('result');
});

export default router;



