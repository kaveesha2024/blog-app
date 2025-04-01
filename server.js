import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./apiRoutes/postRoutes/postRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./apiRoutes/userRoutes/userRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;
const host = process.env.HOST || "127.0.0.1";
const app = express();
const uri = process.env.DB_URI;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(uri).then(() => {
  console.log("Connected to DB");
}).catch((err) => {
  console.log(err)});
app.use('/api', router);
app.use('/api/users', userRouter)

app.listen(port, () => {
  console.log(`server started at http://${host}:${port}`);
});
