import mongoose from "mongoose";

const sizeStockSchema = new mongoose.Schema({
    size: { type: String, required: true},
    stock: { type: Number, required: true},
});

const shopSchema = new mongoose.Schema({
    // ref is creating a link between the "user"model and the "shop"model
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    //when we want to store shopName in db, shopName has to be in string and has to have a value
    shopName: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
    category: [{ type: String, required: true }],
    sizeStock: [ sizeStockSchema],
    imageUrl: {type: String, required: true},
    lastUpdated: { type: Date, required: true},
});

const Shop = mongoose.model("Shop", shopSchema);
export default Shop;