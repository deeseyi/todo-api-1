const express = require('express');
const {json} = require('express');
const {config} = require('dotenv');
const connect = require('./config/database');
const routes = require('./routes/todoRoute');
config()
connect();

const app = express();

app.use(json());

app.use("/todo", routes)

const port = process.env.PORT ;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})