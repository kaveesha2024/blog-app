import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    firstName: {
        type: String,
        required: true,
    },
    date: {type: Date, default: Date.now, required: true},
    picture: String,
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const PostModel = mongoose.model("Blog-Posts", postSchema);
export default PostModel;