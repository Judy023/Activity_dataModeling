import express from "express";
import { book } from "../controllers/book.js";
const router = express.Router();

router.post("/", book.insert);
router.get("/getBook", book.all);
router.get("/getId/:id", book.getById)

export default router;