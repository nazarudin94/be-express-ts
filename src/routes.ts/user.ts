import express from "express";

import userController from "../controllers.ts/user.controller";

const router = express.Router();

// POST /users
router.post("/", userController.createUser);

export default router;
