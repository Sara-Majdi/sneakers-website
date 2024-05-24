import { Request, Response } from "express";
import Shop from "../models/shop";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const getMyShop = async (req: Request, res: Response) => {
    try {
        const shop = await Shop.findOne({ user: req.userId });
        if(!shop) {
            return res.status(404).json({ message: "shop not found"});
        }
        res.json(shop);

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Error fetching shop"});
    }
}

const createMyShop = async ( req: Request, res: Response) => {
    try {
        //finding 
        const existingShop = await Shop.findOne({ user: req.userId})

        if(existingShop) {
            return res.status(409).json({ message: "User shop already exist"});
        }

        const imageUrl = await uploadImage(req.file as Express.Multer.File);

        const shop = new Shop(req.body);
        shop.imageUrl = imageUrl;
        shop.user = new mongoose.Types.ObjectId(req.userId);
        shop.lastUpdated = new Date();
        await shop.save();

        res.status(201).send(shop);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong"});
    }
};

const updateMyShop = async (req: Request, res: Response) => {
    try {
        const shop = await Shop.findOne({
            user: req.userId,
        });

        if(!shop) {
            return res.status(404).json({ message: "shop not found"});
        }

        shop.shopName = req.body.shopName;
        shop.color = req.body.color;
        shop.price = req.body.price;
        shop.category = req.body.category;
        shop.sizeStock = req.body.sizeStock;
        shop.lastUpdated = new Date();

        if(req.file) {
            const imageUrl = await uploadImage(req.file as Express.Multer.File);
            shop.imageUrl = imageUrl;
        }

        await shop.save();
        res.status(200).send(shop);

    } catch(error) {
        console.log("error", error);
        res.status(500).json
    }
}

const uploadImage = async (file: Express.Multer.File) =>{
    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
    
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
    return uploadResponse.url;
}

export default {
    getMyShop,
    createMyShop,
    updateMyShop,
}