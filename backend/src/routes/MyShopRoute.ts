//deals with the product routes for logged in user
import express from "express";
import multer from "multer";
import MyShopController from "../controllers/MyShopController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyShopRequest } from "../middleware/validation";

const router = express.Router();
const app = express()

// const storage = multer.memoryStorage();
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024, //5mb
//     },
// });

const upload = multer();

// Middleware to parse multipart/form-data
app.use(upload.none());

//GET /api/my/shop
router.get("/", MyShopController.getAllProducts)

// /api/my/shop
router.post(
    "/", 
    upload.none(),
    //upload.array("imageFile", 5), 
    //validateMyShopRequest,
    jwtCheck,
    jwtParse,
    MyShopController.createProduct
);

// router.put(
//     "/", 
//     upload.array("imageFile", 5), 
//     validateMyShopRequest,
//     jwtCheck,
//     jwtParse,
//     MyShopController.updateMyShop
// );

// const photosMiddleware = multer({dest: 'uploads/'});
// app.post('/', photosMiddleware.array("photos", 5), (req, res) => {
//     console.log(req.files)
//     res.json(req.files)
// })

// router.post('/', photosMiddleware.array("photos", 5), (req, res) => {
//     console.log(req.files)
//     res.json(req.files)
// })



export default router;