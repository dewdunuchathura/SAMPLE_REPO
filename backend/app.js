

// password = C2JVWnkJuvgfcRVv



const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/Userroutes'); //router file

const app = express();


// middleware 
app.use(express.json());
app.use("/users", router);



// connect to MongoDB
mongoose.connect("mongodb+srv://admin:C2JVWnkJuvgfcRVv@cluster0.jqoto15.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => {
            console.log("Server started on port 5000");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
