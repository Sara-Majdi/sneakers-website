import { Request, Response } from "express";
import Product from "../models/product";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

// const getMyShop = async (req: Request, res: Response) => {
//     try {
//         const shop = await Shop.findOne({ user: req.userId });
//         if(!shop) {
//             return res.status(404).json({ message: "shop not found"});
//         }
//         res.json(shop);

//     } catch (error) {
//         console.log("error", error);
//         res.status(500).json({ message: "Error fetching shop"});
//     }
// }

const createProduct = async ( req: Request, res: Response) => {
    try {
        //finding 
        //console.log(req.body)
        const productCode = req.body.productCode
        
        const existingProduct = await Product.findOne({ productCode: productCode})

        if(existingProduct) {
            return res.status(409).json({ message: "Product with this Product Code already exist"});
        }


        const product = new Product(req.body);
        console.log(product)
        product.user = new mongoose.Types.ObjectId(req.userId);
        product.productCreatedAt = new Date();
        await product.save();

        res.status(201).send(product);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong in createProduct function"});
    }
};

const getAllProducts =  async ( req: Request, res: Response) => {
    const allProducts = await Product.find().maxTimeMS(30000) // Set timeout to 30 seconds
    res.json(allProducts); 
}

// const updateMyShop = async (req: Request, res: Response) => {
//     try {
//         const shop = await Shop.findOne({
//             user: req.userId,
//         });

//         if(!shop) {
//             return res.status(404).json({ message: "shop not found"});
//         }

//         shop.shopName = req.body.shopName;
//         shop.color = req.body.color;
//         shop.price = req.body.price;
//         shop.category = req.body.category;
//         shop.sizeStock = req.body.sizeStock;
//         shop.lastUpdated = new Date();

//         if(req.file) {
//             const imageArray = await uploadImage(req.file as Express.Multer.File);
//             //shop.imageArray = imageArray;
//         }

//         await shop.save();
//         res.status(200).send(shop);

//     } catch(error) {
//         console.log("error", error);
//         res.status(500).json
//     }
// }

const uploadImage = async (file: Express.Multer.File) =>{
    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
    
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
    return uploadResponse.url;
}


export default {
    // getMyShop,
    createProduct,
    getAllProducts,
    // updateMyShop,
}