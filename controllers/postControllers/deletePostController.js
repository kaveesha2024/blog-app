import PostModel from "../../models/postModel/postModel.js";

const deletePost = async (req, res) => {
  const id = req.body.id;
  if (req.user == null) {
    res.status(404).json({
      message: 'User Not Found',
    })
  }else {
    try{
      console.log(id)
      const response = await PostModel.deleteOne({ _id: id });
      res.status(200).json(response);
    }catch(err){
      res.status(500).json(err);
    }
  }
};

export default deletePost;
