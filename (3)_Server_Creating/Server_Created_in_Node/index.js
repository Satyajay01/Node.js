// const http = require("http");
import http from 'http'; //ES6 method

const server = http.createServer();
const port = 8080;
server.listen(port,()=>{
    console.log(`Server PORT Number: ${port}`);
    console.log("Server start ho gaya hai...! ");
})