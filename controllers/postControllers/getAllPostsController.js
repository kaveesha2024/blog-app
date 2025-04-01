import PostModel from "../../models/postModel/postModel.js";
const getAllPostsController = (req, res) => {
  PostModel.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.json(err);
    });
};
export default getAllPostsController;
