import express from "express";
import { user } from "../controllers/user.js";
const router = express.Router();

router.post("/", user.insert);
router.get("/getUser", user.all);
router.get("/getId/:id", user.getById)

export default router;