import express from "express";
import './config/config.js';
import Product from './config/product.js'

const app = express();
app.use(express.json());

// postman url (http://localhost:5000/search/Realme)

app.get("/search/:key", async(req, res)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data)
    console.log(data);
})






app.listen(5000,()=>{
    console.log("Server is Started...!");
})
