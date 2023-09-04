const express = require('express');
const postController = require('../controllers/posts.controller');
const postRouter = express.Router();

postRouter.get('/', postController.getPosts);

module.exports = postRouter;