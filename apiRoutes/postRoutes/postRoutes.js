import express, {query} from "express";
import createPostController from "../../controllers/postControllers/createPostController.js";
import getAllPostsController from "../../controllers/postControllers/getAllPostsController.js";
import yourPostsController from "../../controllers/postControllers/yourPostsController.js";
import getUsersPosts from "../../controllers/postControllers/getUsersPostsController.js";
import deletePost from "../../controllers/postControllers/deletePostController.js";
const router = express.Router();

router.post("/create-post", createPostController);
router.get("/posts", getAllPostsController);
router.get("/your-posts", yourPostsController);
router.get("/users-posts", getUsersPosts);
router.delete("/delete-posts", deletePost);

export default router;