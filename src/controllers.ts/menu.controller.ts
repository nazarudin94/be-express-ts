import type { Request, Response } from "express";
import menuModel from "../models.ts/menu.model";
async function createMenu(req: Request, res: Response) {
  const { nama, url, page, status, menu_grup_id, description, roleId } =
    req.body;
  try {
    const data = await menuModel.createMenu(
      nama,
      url,
      page,
      status,
      menu_grup_id,
      description,
      roleId
    );
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function createMenuGrup(req: Request, res: Response) {
  const { nama } = req.body;
  try {
    const data = await menuModel.createMenuGrup(nama);
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function getMenu(req: Request, res: Response) {
  try {
    const data = await menuModel.getMenu();
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function getMenuGrup(req: Request, res: Response) {
  try {
    const data = await menuModel.getMenuGrup();
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function getMenuById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const data = await menuModel.getMenuById(Number(id));
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function deleteMenuById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const data = await menuModel.deleteMenuById(Number(id));
    res.status(200).json({ message: "Data berhasil dihapus", data: data });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function deleteGrupMenuById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await menuModel.deleteGrupMenuById(Number(id));
    res.status(200).json({ message: "Data berhasil dihapus", data: data });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function getMenuGrupById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const data = await menuModel.getGrupMenuById(Number(id));
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
export const updateMenu = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, url, status, page, menu_grup_id, description } = req.body;

  try {
    const data = await menuModel.updateMenu(
      name,
      url,
      status,
      page,
      menu_grup_id,
      description,
      id
    );
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Gagal update menu", error: error.message });
  }
};
export const updateGrupMenu = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  try {
    const data = await menuModel.updateGrupMenu(name, id);
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Gagal update grup menu", error: error.message });
  }
};
export default {
  createMenu,
  createMenuGrup,
  getMenu,
  getMenuById,
  updateMenu,
  updateGrupMenu,
  getMenuGrupById,
  getMenuGrup,
  deleteMenuById,
  deleteGrupMenuById,
};
