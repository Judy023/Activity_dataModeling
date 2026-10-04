import express from "express";
import { student } from "../controllers/student.js";
const router = express.Router();

router.post("/", student.insert);
router.get("/getStudent", student.all);
router.get("/getId/:id", student.getById)

export default router;