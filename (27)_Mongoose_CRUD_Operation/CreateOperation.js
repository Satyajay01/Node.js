import mongoose, { model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/e-comm");
    
    // validation
    const ProductSchema = new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    });
    
    //----------- CREATE Operation -------------
    const CreateOperation = async () =>{
    const product = mongoose.model('products', ProductSchema); // products  (collection name/ Table name)
    let data = new product(
        {
        name:"Nothing Phone 5G",
        brand:"Nothing",
        price:"750",
        category:"mobile"
        });
    let result = await data.save();
    console.log(result);
};

CreateOperation ();