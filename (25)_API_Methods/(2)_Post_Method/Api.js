import express from 'express';
import dbConnect from './Connection/MongoDB.js'

const app = express();
const port = 5000;

app.use(express.json()) // To get the Body from the request.

app.post('/', async (req, res)=>{
    console.log(req.body);
    let data = await dbConnect();
    let result = await data.insertMany(req.body)
    res.send(result)

});


app.listen(port, () => {
    console.log("Server is Started...!");
});


