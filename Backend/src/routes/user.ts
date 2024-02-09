import express from "express";
import { newUser } from "../controllers/user.js";
const router = express.Router();

//route- /api/v1/new
router.post("/new", newUser);

export default router;
