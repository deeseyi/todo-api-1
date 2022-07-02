const Todo = require("../models/todo");
const { v4: uuid } = require("uuid");

//get all todos

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos.length === 0) {
      res.status(404).json({
        success: false,
        message: "No todos found",
      });
    } else {
      res.status(200).json({
        sucess: true,
        message: "All todos",
        todos,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error getting todos",
      error,
    });
  }
};

// get todo by id
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ id: req.params.id });
    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todo found",
        todo,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error getting todo",
      error: error.message,
    });
  }
};

// create new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await req.body;
    const createdAt = new Date().toLocaleDateString();
    const updatedAt = null;
    todo.id = uuid();
    todo.createdAt = createdAt;
    todo.updatedAt = updatedAt;
    const newTodo = await Todo.create(todo);

    if (!newTodo) {
      res.status(400).json({
        success: false,
        message: "Error creating todo",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Todo created",
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating todo",
      error,
    });
  }
};

// update todo
exports.updateTodo = async (req, res) => {
  try {
    const id = { id: req.params.id };
   let todo = await req.body;
    todo.updatedAt = new Date().toLocaleDateString();

    const update = await Todo.findOneAndUpdate(
      id,
     todo,
     
      { new: true }
    );

    if (!update) {
      res.status(404).json({
        success: false,
        message: "Todo not updated",
      });
    }

    return res.status(201).json({
      message: "Todo updated",
      update,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating todo",
      error: error.message,
    });
  }
};

// delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const id = { id: req.params.id };
    const deleted = await Todo.findOneAndDelete(id);

    if (!deleted) {
      res.status(404).json({
        success: false,
        message: "Todo not deleted",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      deleted,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting todo",
      error: error.message,
    });
  }
};
