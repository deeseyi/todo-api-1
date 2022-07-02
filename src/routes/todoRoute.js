const express = require('express');
const router = express.Router();
const {getTodos, getTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController');

router
.get("/", getTodos)
.get("/:id", getTodo)
.post("/", createTodo)
.put("/:id", updateTodo)
.delete("/:id", deleteTodo);

module.exports = router;