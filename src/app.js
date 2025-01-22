const express = require("express");

// Creating a web server using express
const app = express(); // Creating an instance of an express application


//Middleware functions: (called in the middle of request chain)
// When we make an API call, it goes through a middleware chain
// and it finally goes to the req handler and if it doesnt find
// the req handler, then it tries to find the error handler.


// Request handler functions (routes)
//GET /users => it checks all the app.xxx("matching route") functions
app.use("/", (req,res)=>{
    res.send("Handling /route"); //this will handle all routes
    next();
})

// app.use("/route", rH1, [rH2, rH3], rH4, rH5);
app.get(
    "/user",
    (req, res, next) => {
        console.log("Handling the route user!!");
        next(); // Pass control to the next middleware
    },
    (req, res,next) => {
        console.log("Handling the route user 2!");
        res.send("2nd Response!"); // Sending the final response
        next(); // Pass control to the next middleware
    },
    (req, res) => {
        console.log("Handling the route user 3!");
        res.send("3rd Response!"); // Sending the final response
    }
);


//
app.get("/admin/getAllData", (req, res) => {
    //Logic of fetching all data
    res.send("All data sent!");
})

// Fixing the port number in the log message
app.listen(8888, () => {
    console.log("Server is successfully listening on PORT: 8888..");
});