const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.js')

router.get("/", PostsController.getPosts);
router.post("/", PostsController.createPost);
router.patch("/:id", PostsController.updatePost)
router.get("/:id", PostsController.fetchPostById)




module.exports.postRoutes=router