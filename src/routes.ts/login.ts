import express from "express";
import authController from "../controllers.ts/auth.controller";

const router = express.Router();
router.post("/login", authController.authUser);
export default router;
