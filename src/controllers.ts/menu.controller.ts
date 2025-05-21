import type { Request, Response } from "express";
import menuModel from "../model.ts/menu.model";
async function createMenu(req: Request, res: Response) {
  const { nama, url, page, status, menu_grup_id } = req.body;
  try {
    const data = await menuModel.createMenu(
      nama,
      url,
      page,
      status,
      menu_grup_id
    );
    res.status(201).json(data);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(409).json({ message: "Username already exists" });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
}

async function createMenuGrup(req: Request, res: Response) {
  const { nama } = req.body;
  try {
    const data = await menuModel.createMenuGrup(nama);
    res.status(201).json(data);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(409).json({ message: "Username already exists" });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
}

export default { createMenu, createMenuGrup };
