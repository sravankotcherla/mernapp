const PostModel= require("../models/posts.js")

exports.getPosts = async(req, res) => {
    try {
        const resp = await PostModel.find({});
        res.status(200).jsonp(resp);
    } catch (e) {
        console.log(e)
        res.send(e);
    }
}

exports.createPost = async (req, res) => {
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