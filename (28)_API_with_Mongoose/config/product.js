import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
name:String,
brand:String,
price:Number,
category:String
});

const Product = mongoose.model('Product', productSchema);

export default Product;