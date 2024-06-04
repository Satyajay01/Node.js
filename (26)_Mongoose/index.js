import mongoose, { model } from "mongoose";

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");

        // Data and table fields validation
    const ProductSchema = new mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    });

    // model = database connection
    const ProductModel = mongoose.model('products', ProductSchema); // products  (collection name/ Table name)
    let data = new ProductModel(
        {
        name:"M 40",
        brand:"Realme",
        price:"350",
        category:"mobile" // Category will not be added to the database because there is no data in ProductSchema
        });
    let result = await data.save();
    console.log(result);
};

main();