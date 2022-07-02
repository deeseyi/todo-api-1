

const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        default: null
    },
});

const todoModel = model("Todo", todoSchema);

module.exports = todoModel;