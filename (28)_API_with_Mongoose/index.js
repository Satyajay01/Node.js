import express from "express";
import './config/config.js';
import Product from './config/product.js'

const app = express();
app.use(express.json());

// API Methods-------------

// Get method
app.get("/read", async(req, res)=>{
    const data = await Product.find();
    res.send(data)
    console.log(data)
})


// Post method
app.post("/create", async (req, res)=>{
    const data = new Product(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result)
});


// Put (update) method
// url (http://localhost:5000/update/665f4748153464b651c0757b)
app.put("/update/:_id", async (req, res)=>{
    const data = new Product(req.body);
    const result = await data.updateOne(
        req.params,
        {$set: req.body}
    );
    console.log("Data Updated",data);
    res.send(result)
});


// Delete method
// url: (http://localhost:5000/delete/6660aa46d779cc964b89d4cf)

app.delete("/delete/:_id", async (req, res)=>{
    const data = await Product.deleteOne(req.params);
    res.send(data)
    console.log("Data Deleted: ",req.params);
})

app.listen(5000,()=>{
    console.log("Server is Started...!");
})
