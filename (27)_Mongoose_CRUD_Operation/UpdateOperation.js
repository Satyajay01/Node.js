import mongoose, { model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/e-comm");

// validation
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

//----------- Update Operation -------------
const UpdateOperation = async () => {
    const product = mongoose.model('products', ProductSchema); // products  (collection name/ Table name)
    const data = await product.updateMany(
        { name: "Nothing Phone 5G" },
        {
            $set: { price: "600", category:"Mobile"}
        }
    );

    console.log(data);
};

UpdateOperation();