const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.js')

router.get("/", PostsController.getPosts);
router.post("/", PostsController.createPost);



module.exports.postRoutes=router