// const http = require("http");
// const fs = require('fs');
// const url = require("url");
const express = require('express');

//Here app is the handerFunction
const app = express();


//get as per GET request from client
app.get('/', (req, res) => {
    return res.send("Hello from home page");
});

app.get('/about', (req, res) => {
    return res.send("Hello from about page " + "hey " + req.query.myName + " you Are of " + req.query.age + " Age");
});

app.post('/signup', () => {

});

app.listen(8000, () => {
    console.log("Server started");
});

//Express uses all requires this internally as http, url, createserver, etc..


// THINGS Before Express JS -->
// function myHandler(req, res) {
//     if (req.url == "/favicon.ico")
//         return res.end();

//     const log = `${Date.now().toString()}: ${req.method} ${req.url} New Req Received\n`;

//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);

//     fs.appendFile("server_log.txt", log, (err, result) => {
//         switch (myUrl.pathname) {
//             case '/':
//                 if (req.method === "GET")
//                     res.end("Hello Server From Home Page");
//                 break;

//             case '/about':
//                 const username = myUrl.query.myName;
//                 res.end(`Hello Server From ${username}`);
//                 break;

//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end(`Your Results for ${search}`);
//                 break;

//             case '/signup':
//                 if (req.method === "GET")
//                     res.end('this is a signup form');
//                 else if (req.method === "POST") {
//                     // DB Query
//                     res.end("Success");
//                 }
//                 break;

//             default:
//                 res.end("404 : Hello Server From Unknown Page");
//         }
//     });
//     // console.log(req);
//     // console.log("New req recieved");
// }

// const myServer = http.createServer(myHandler);

// myServer.listen(8000, () => {
//     console.log("Server started");
// });