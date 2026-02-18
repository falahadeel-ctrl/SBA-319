import express from 'express';
import db from '../db/conn.js';

const router = express.Router();

//Getting all diet

router.get('/', async(req, res) => {
    let collection = await db.collection(`diets`);
    let result = await db.collection.find({}).toarray();
    res.json(result);
});

//posting new diet

router.post('/' ,async function (req, res){
 let collection = await db.collection(`diet`);
 let result = await db.collection.insertOne(newDiet);
 res.json(result);
});

//Patch new diet

router.patch('/', async (req, res)=>{
    let collection = await db.collection(diet);
    let update = await db.collection.updateOne(
        {type: req.params.type},
        {type: req.body}
    );
 res.json(result);
})

export default router