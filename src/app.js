const express = require("express");

//basically creating a web server using express
const app = express(); //creating an instance of an expressjs application

//request handler functions(routes, in short) && order of routes matters a lot!!

//we can add as many route handlers as we want!!

app.use(
    "/user",
    //next is done to run the 2nd Response!!
    (req,res,next)=>{
        console.log("handling the route user!!");
        res.send("Response!!"); //suppose we are not handling it here and want to route to the next 2nd response then,
        next(); //this forwards the router to the next request handler
    },
    //unless we dont put next function in this event handler, this event handler will run in itself
    (req,res,next)=>{
        console.log("Handling the route user 2!!");
        res.send("2nd Response!!"); //sends the response back to Postman API and finishes the function thereafter
        next();
    },
    (req,res,next)=>{
        console.log("Handling the route user 3!!");
        res.send("3rd Response!!"); //sends the response back to Postman API and finishes the function thereafter
        next();
    },
    (req,res)=>{
        console.log("Handling the route user 4!!");
        res.send("4th Response!!"); //sends the response back to Postman API and finishes the function thereafter
    }
);

//test this GET api call on POSTMAN API TESTER
app.get("/user", (req,res)=>{
    console.log(req.params)
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