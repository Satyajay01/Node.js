import mongoose, { model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/e-comm");

// validation
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

//----------- Read Operation -------------
const ReadOperation = async () => {
    const product = mongoose.model('products', ProductSchema); // products  (collection name/ Table name)
    const data = await product.find(
        { name: "Nothing Phone 5G" }
    );

    console.log(data);
};



ReadOperation();