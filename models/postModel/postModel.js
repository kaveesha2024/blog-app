import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    author: {
        type: String,
        required: true,
    },
    date: {type: Date, default: Date.now, required: true},
    picture: String,
});
const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;