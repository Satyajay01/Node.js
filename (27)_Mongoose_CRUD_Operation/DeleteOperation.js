import mongoose, { model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/e-comm");

// validation
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

//----------- Delete Operation -------------
const DeleteOperation = async () => {
    const product = mongoose.model('products', ProductSchema); // products  (collection name/ Table name)
    const data = await product.deleteOne(
        { name: "s24 ultra" },
    );

    console.log(data);
};

DeleteOperation();