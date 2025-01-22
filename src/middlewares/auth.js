const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked..");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz"; //authorized condition
    if(!isAdminAuthorized) {
        res.status(401).send("Unauthorized request!");
    }else{
        next();
    }
};


const userAuth = (req, res, next) => {
    console.log("User auth is getting checked..");
    const token = "xyz";
    const isUserAuthorized = token === "xyz"; //authorized condition
    if(!isUserAuthorized) {
        res.status(401).send("Unauthorized request!");
    }else{
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth,
};