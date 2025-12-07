import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from "express";
import { homeRouter } from './modules/home/home.route';


const app: Application = express();

app.use( cookieParser() );
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use( cors( {
    origin: [ "http://localhost:3000" ],
    credentials: true
} ) );

app.get( "/", homeRouter )



export default app;