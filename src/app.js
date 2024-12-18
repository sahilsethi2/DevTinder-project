const express = require("express");

//basically creating a web server using express
const app = express(); //creating an instance of an expressjs application

//request handler function\

app.use("/", (req,res)=>{
    res.send("Namaste from the dashboard!");
});

// write localhost:7777/hello to access this on browser:
app.use("/hello", (req,res)=>{
    res.send("Hello hello hello!");
});


app.use("/test", (req,res)=>{
    res.send("Hello from the server!");
});

app.listen(7777, ()=>{
    console.log("Server id successfully listening on PORT:7777..")
});


//run the function in the terminal using (node src/app.js)