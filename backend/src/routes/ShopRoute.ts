import express from "express";
import { param } from "express-validator";
import ShopController from "../controllers/ShopController";

//interacting with all the products in here
const router = express.Router();

router.get(
    "/search/:color", 
    param("city")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("Color parameter must be a valid string"),
    ShopController.searchShop
);

export default router;