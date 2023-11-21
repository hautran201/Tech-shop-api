import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config';

import mongodbConnect from './Configs/dbConnect.js';
import Router from './Routes/index.js';
import handleError from './Middleware/handleError.js';

const app = express();
const port = process.env.PORT || 8080;
const corsOptions = {
    origin: '*',
};

//Middleware
app.use(bodyParser.json()); //parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); //parse requests of content-type - application/x-www-form-urlencoded
app.use(morgan('dev')); //follow log GET, POST...
app.use(cors(corsOptions)); //

mongodbConnect();

Router(app);

app.use(handleError); //Middleware Handle Error

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
