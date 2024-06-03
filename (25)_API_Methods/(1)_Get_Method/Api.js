import express from 'express';
import dbConnect from './Connection/MongoDB.js'

const app = express();
const port = 5000;

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data); 
});



app.listen(port, () => {
    console.log("Server is Started...!");
});


