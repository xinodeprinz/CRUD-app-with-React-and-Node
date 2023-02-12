import express from "express";
import { config } from "dotenv";
import cors from 'cors'
import router from "./src/routes.js";
import upload from "express-fileupload";
import jsonErrorHandler from 'express-json-error-handler';
// import { errorHandler } from "./src/middlewares.js";

config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload());
app.use(router);
app.use(jsonErrorHandler());
// app.use(errorHandler);

const { PORT } = process.env

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
