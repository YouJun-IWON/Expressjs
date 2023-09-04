const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users.controller');

usersRouter.get('/', usersController.getUsers);

usersRouter.post('/:id', usersController.getUser);

usersRouter.get('/', usersController.postUser);

module.exports = usersRouter;
