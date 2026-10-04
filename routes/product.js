import express from "express";
import { product } from "../controllers/product.js";
const router = express.Router();

router.post("/", product.insert);
router.get("/getProduct", product.all);
router.get("/getId/:id", product.getById)

export default router;