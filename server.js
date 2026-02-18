//imports
import express from "express";
import db from './db/conn.js';

import Animals from "./routes/Animals.js";
import Food from './routes/Food.js';
import legs from './routes/legs.js';

const app = express();
const PORT = 3000;

// app.json();

//middleware
app.use(express.json()); //middleware that runs before routes.
// app.use(logReq);

//routes
app.use("/animals",Animals);
app.use("/legs",legs);
app.use("/food",Food);
// app.get('/',function(req,res){
//     res.send('i runnn');
// });


//errorhandleing
//handler
app.listen(PORT, function(){
    console.log(`Server is runing successfully on ${PORT}`);
});