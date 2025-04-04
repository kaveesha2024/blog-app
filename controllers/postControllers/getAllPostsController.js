import PostModel from "../../models/postModel/postModel.js";
const getAllPostsController = async (req, res) => {
    try {
        const response = await PostModel.find().sort({createdAt: -1 });
         res.json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }

};
export default getAllPostsController;
