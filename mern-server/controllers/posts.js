const  mongoose  = require("mongoose");
const PostModel= require("../models/posts.js")

exports.getPosts = async (req, res) => {
    try {
        const resp = await PostModel.find();
        return res.send(resp)
    } catch (e) {
        console.log(e)
        res.send(e);
    }
}

exports.createPost =  async(req, res)=>{
    const body = req.body;
    const newPost = new PostModel(body);
    try {
        await newPost.save();
        res.status(200).jsonp(newPost)
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

exports.updatePost = async (req, res) => {
    const { id: postId } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send("Invalid post object id");
    } else {
        try {
            const resp = await PostModel.findByIdAndUpdate(postId, {...post, _id: postId}, { new: true })
            return res.status(200).send(resp)
        } catch (e) {
            console.log(e);
            return res.send(e);
        }
    }
}

exports.fetchPostById = async (req, res) => {
    const { id:postId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send("Invalid post object id");
    } else {
        try {
            const post = await PostModel.findById(postId);
            return res.status(200).send(post);
        } catch (e) {
            res.send(e);
        }
    }
}

exports.deletePostById = async (req, res) => {
    const { id:postId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send("Invalid post object id");
    } else {
        try {
            const resp = await PostModel.findByIdAndDelete(postId);
            return res.status(200).send(resp);
        } catch (e) {
            res.send(e);
        }
    }
}

exports.likePost = async (req, res) => {
    const { id: postId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send("Invalid post object id");
    } else {
        try {
            const post = await PostModel.findById(postId);
            const updatedPost = await PostModel.findByIdAndUpdate(postId, { likeCount: post.likeCount + 1 }, {new: true});
            return res.status(200).send(updatedPost);
        }catch(e) {
            return res.send(e);
        }
    }
}