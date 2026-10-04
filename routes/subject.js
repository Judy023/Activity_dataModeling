import express from "express";
import { subject } from "../controllers/subject.js";
const router = express.Router();

router.post("/", subject.insert);
router.get("/getSubject", subject.all);
router.get("/getId/:id", subject.getById)

export default router;