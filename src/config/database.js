const mongoose = require("mongoose");
require('dotenv').config()

const connect = async () => {
    try {
         mongoose.connect( process.env.MONGO_DB_LOCAL)
         console.log("Connected to mongo")
    } catch (error) {
        console.log(error);
    }
   
};

module.exports = connect