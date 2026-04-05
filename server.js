import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./dbconfig/connectDb.js";
import router from "./route/route.js";
import cookieParser from "cookie-parser";
dotenv.config();


const app = express();
app.use(cors({
    origin: "https://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use((req, res, next) => {
    console.log(`${req.method} -> ${req.url}`)
    next();
});

app.use('/api/io-ai', router);

app.listen(PORT, async (error) => {
    if (!error) {
        console.log(`Server is running on PORT ${PORT}`);
        connectDatabase();
    } else {
        console.error(error)
    }
})