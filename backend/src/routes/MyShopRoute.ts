import express from "express";
import multer from "multer";
import MyShopController from "../controllers/MyShopController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyShopRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    },
});

// /api/my/shop
router.post(
    "/", 
    upload.single("imageFile"), 
    validateMyShopRequest,
    jwtCheck,
    jwtParse,
    MyShopController.createMyShop
);

export default router;