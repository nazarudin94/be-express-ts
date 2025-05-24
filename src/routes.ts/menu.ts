import express from "express";

import menuController from "../controllers.ts/menu.controller";
import { verifyToken } from "../utills/midleware";

const router = express.Router();

// POST /users

router.post("/createmenu", menuController.createMenu); //create menu
router.get("/getMenu", verifyToken, menuController.getMenu); // get all menu
router.get("/getMenuById/:id", menuController.getMenuById); // get menu by id
router.delete("/deleteMenuById/:id", menuController.deleteMenuById); // get menu by id
router.delete("/deleteGrupMenuById/:id", menuController.deleteGrupMenuById); // get menu by id
router.put("/updateMenu/:id", menuController.updateMenu); // update menu
router.post("/createmenugrup", menuController.createMenuGrup); // create menu grup
router.get("/getMenuGrup", menuController.getMenuGrup); // get all menu grup
router.get("/getMenuGrupById/:id", menuController.getMenuGrupById); // get menu grup by id
router.put("/updateGrupMenu/:id", menuController.updateGrupMenu); // update grup menu

export default router;
