const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect( //this returns a promise telling whether connection has been established or not
        "mongodb://localhost:27017/developers"
    );
};


//handling the promise
connectDB()
.then(()=>{  //happy case
    console.log("Database connection established");
})
.catch(err=>{ //error case
    console.log("Database cannot be connected");
});