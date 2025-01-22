Create a repository
Initialize a repository
node_modules, package.json, package-lock.json
Install express
create a server
listen to port 7777
write request handlers for /test, /hello
install nodemon and update scripts insde package.json
what are dependencies
what is the use of "-g" while npm install
difference between caret and tilde (^ & ~)


initialize git
.gitignore
create a remote repo on github
push all the code to remote origin
play with routes and route extensions ex. /hello, / , hello/2, /xyz
order for the routes matters a lot
install Postman app and make a workspace/collection > test API call
write logic to handle GET, POST, PATCH, DELETE API calls and test them on POSTMan API!!
explore routing and use of ? , +, (), * in the routes
use of regex in the routes /a/ , /.*fly$/
reading the query params in the routes 
reading the dynamic routes

(S2 E05)
Multiple route handlers - Play with the code!!
next() 
next() function and errors along with res.send()
app.use("/route", rH, [rH2, rH3], rH4);
What is a middleware function
How ExpressJS basically handles requests behind the scenes
Difference between app.use and app.all
Write a dummy auth middleware for admin
Write a dummy auth middleware for all user routes , except /user/login
Error handling using app.use("/", (err,req,res,next) = {});

(S2 E06)
Create a free cluster on MongoDB official website Mongo Atlas
Install mongoose library
Connect your applocation to the database "Connection-url"/devTinder
call the connectDB function and connect to database before starting application to 8888.
create a user schema..create a user model..
create a POST /signup API to add data to the database..
Push some documents using API calls from PostMan..
Error handling using try-catch
