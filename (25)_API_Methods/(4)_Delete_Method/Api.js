import express from 'express';
import dbConnect from './Connection/MongoDB.js'
import  MongoDB from 'mongodb';


const app = express();
const port = 5000;

app.use(express.json()) // To get the Body from the request.

app.delete("/:id", async (req, res)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new MongoDB.ObjectId(req.params.id)});

    res.send(result);
    console.log("Data Deleted...!","id is: ",req.params.id,result)
})


app.listen(port, () => {
    console.log("Server is Started...!");
});


