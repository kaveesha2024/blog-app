import PostModel from "../../models/postModel/postModel.js";
const createPostController = (req, res) => {
    const { title, author, content, picture } = req.body;
    const post = new PostModel({
        title,
        author,
        content,
        picture,
    });
    post
        .save()
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
        res.json(err);
    })
};
export default createPostController;
