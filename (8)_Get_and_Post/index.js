const express = require("express");
const path = require("path"); 
const bodyParser = require("body-parser"); //bodyParser is middleware that parses the body of HTTP requests, allowing it to read JSON, URL-encoded data, etc.

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    // console.log(path.join(__dirname, './index.html'));
    res.sendFile(path.join(__dirname, './index.html')); //Login Page form
});



// Login Page data print in Document
app.post("/users.html", (req, res) => {
    res.send(` 
    <div><h1>Name : ${req.body.name}</h1></div> 
    <h1>Email : ${req.body.email}</h1>
    <h1>Password : ${req.body.password}</h1>`);

    console.log(req.body)

});


app.listen(port, () => {
    console.log("Server is started....!");
});