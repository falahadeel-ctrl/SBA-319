import express from 'express';
import db from '../db/conn.js';

const router = express.Router();

//Getting all diet

router.get('/', async(req, res) => {
    let collection = await db.collection(`diet`);
    let result = await collection.find({}).toArray();
    res.json(result);
});

//posting new diet

router.post('/' ,async function (req, res){
 let newDiet = req.body;
 let collection = await db.collection('legs');
 let result = await collection.insertOne(newDiet);
 res.json(result);
});

//Patch new diet

router.patch('/:type', async (req, res)=>{
    let collection = await db.collection('legs');
    let result = await collection.updateOne(
        {type: req.params.type},
        {$set: req.body}
    );
 res.json(result);
})

//delete diet
   router.delete('/:type', async (req, res)=>{
       let collection = await db.collection('legs');
       let result = await collection.deleteOne({type: req.params.type});
       res.json(result);
   });

export default router