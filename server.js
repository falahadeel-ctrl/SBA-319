//imports
import express from "expess";
import db from './db/conn';

const app = express();
const PORT = 3000;

app.json();

//middleware
app.use(app.json()); //middleware that runs before routes.
app.use(logReq);

//routes

//errorhandleing
//handler
