import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getPosts } from "./controllers/postController.js";
const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/getPosts", (req, res) => {
  res.json(getPosts());
});

app.listen(port, () => {
  console.log("server is listening port", port);
});
