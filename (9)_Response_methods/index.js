import fs from "fs";
import express from 'express';



const server = express();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const htmlfile = fs.readFileSync('./index.html', 'utf-8');


server.get('/',(req, res)=>{
    res.send("<h1>Hello, this is Response methods </h1>")
    // res.send(htmlfile);

    // res.sendFile("E:/C_C_plus/Node.js/(9)express_new/textfile.txt") 

    // res.json(data)
    // res.sendStatus(404);
})



server.listen(8080, ()=>{
    console.log("Server is Started...!")
} )




