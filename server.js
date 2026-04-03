import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./dbconfig/connectDb.js";
dotenv.config();


const app = express()

const PORT = process.env.PORT;

app.use((req, res, next) => {
    console.log(`${req.method} -> ${req.url}`)
    next();
})

app.listen(PORT, async (error) => {
    if (!error) {
        console.log(`Server is running on PORT ${PORT}`);
        connectDatabase();
    } else {
        console.error(error)
    }
})