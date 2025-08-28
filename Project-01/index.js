
// const users = require('./MOCK_DATA.json');

const { type } = require("os");
const express = require("express");
const app = express();
const userRouter = require('./routes/user');
const { logReqRes } = require('./middleware'); // by default takes index.js from middleware 
const PORT = 8000;

// Connection
const { connectMongoDb } = require("./connection");
connectMongoDb('mongodb://127.0.0.1:27017/try-app');

//MiddleWare for all requests (Plugin) usally for form data
app.use(express.urlencoded({ extended: false })); //builtin middleware
//user define middleware -->
app.use(logReqRes('log.txt'));


// app.use((req, res, next) => {
//     console.log("Hello, from middleware 2 " + req.myUserName);
//     // return res.json({ msg: "Hello, from middleware 2" });
//     next(); // calls the next funtion that is Routes
// });

//Router
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server Started at Port : ${PORT}`);
});