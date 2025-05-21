import express from "express";

import menuController from "../controllers.ts/menu.controller";

const router = express.Router();

// POST /users
router.post("/createmenu", menuController.createMenu);
router.post("/createmenugrup", menuController.createMenuGrup);

export default router;
