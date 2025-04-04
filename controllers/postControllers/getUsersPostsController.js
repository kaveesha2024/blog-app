import PostModel from "../../models/postModel/postModel.js";

const getUsersPosts = async (req, res) => {
    if(req.user != null) {
        try {
            const response = await PostModel.find({email: req.user.email});
            res.status(200).json(response);
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
};

export default getUsersPosts;