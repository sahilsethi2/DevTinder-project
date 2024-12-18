const express = require("express");

//basically creating a web server using express
const app = express(); //creating an instance of an expressjs application

//request handler functions(routes, in short) && order of routes matters a lot!!

//test this GET api call on POSTMAN API TESTER
app.get("/user", (req,res)=>{
    res.send({firstName : "Akshay", lastName : "Saini"})
})
app.post("/user", (req,res)=>{
    res.send("Saved data to the database successfully")
})




app.use("/hello/2", (req,res)=>{
    res.send("Aabra ka daabra!");
});

// write localhost:7777/hello to access this on browser:
app.use("/hello", (req,res)=>{
    res.send("Hello hello hello!");
});

//this will match all the HTTP method API calls to /test
app.use("/test", (req,res)=>{
    res.send("Hello from the server!");
});

//this route overrides every other route 
app.use("/", (req,res)=>{
    res.send("Namaste from the dashboard!");
});


app.listen(7777, ()=>{
    console.log("Server id successfully listening on PORT:7777..")
});


//run the function in the terminal using (node src/app.js)