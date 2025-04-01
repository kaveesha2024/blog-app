import express, {query} from "express";
import createPostController from "../../controllers/postControllers/createPostController.js";
import getAllPostsController from "../../controllers/postControllers/getAllPostsController.js";
const router = express.Router();

router.post("/create-post", createPostController);
router.get("/posts", getAllPostsController);

export default router;