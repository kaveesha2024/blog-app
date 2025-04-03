import PostModel from "../../models/postModel/postModel.js";
const createPostController = (req, res) => {
    const {firstName, email} = req.user;
    const {title, content, picture} = req.body;
    const post = new PostModel({
        firstName,
        email,
        title,
        content,
        picture,
    });
    const fetchData = async () => {
        try {
            const response = await post.save();
            res.status(201).json(response);
        }
        catch (error) {
            res.status(401).json(error);
        }
    }
    fetchData();
};
export default createPostController;
