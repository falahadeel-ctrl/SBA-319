import express from 'express';
import db from '../db/conn.js';

const router = express.Router();

//Getting all data

router.get('/', async(req, res) => {
    let collection = db.collection(`diets`);
    let result = db.collection.find({});
    json(`result`)

})