import express from 'express';
import dbConnect from './Connection/MongoDB.js'

const app = express();
const port = 5000;

app.use(express.json()) // To get the Body from the request.

app.put('/', async (req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name: req.body.name},
        {$set:req.body}
    )
    res.send(req.body)
    console.log(req.body);
})


app.listen(port, () => {
    console.log("Server is Started...!");
});


