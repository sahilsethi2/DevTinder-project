const express = require("express");

//basically creating a web server using express
const app = express(); //creating an instance of an expressjs application

//request handler functions(routes, in short) && order of routes matters a lot!!

//we can add as many route handlers as we want!!

app.post(
    "/user",
    //next is done to run the 2nd Response!!
    (req,res,next)=>{
        console.log("handling the route user!!");
        // res.send("Response!!"); //suppose we are not handling it here and want to route to the next 2nd response then,
        next(); //this forwards the router to the next request handler
    },
);
app.post("/user", (req,res,next)=>{
    console.log("Handling the route user!");
    res.send("2nd route handler");
});

//this route overrides every other route 
app.use("/", (req,res,next)=>{
    // res.send("Namaste from the dashboard!");
    next();
});


//test this GET api call on POSTMAN API TESTER
app.get("/user", (req,res,next)=>{
    // res.send({firstName : "Akshay", lastName : "Saini"})
    next();
}),
app.post("/user", (req,res,next)=>{
    res.send("Saved data to the database successfully")
    next();
}),app.post("/user", (req,res)=>{
    res.send("Saved data to the database successfully")
}
);



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



app.listen(3333, ()=>{
    console.log("Server id successfully listening on PORT:3333..")
});


//run the function in the terminal using (node src/app.js)


