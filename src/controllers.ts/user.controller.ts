import type { Request, Response } from "express";
import userModel from "../models.ts/user.model";
async function createUser(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const data = await userModel.createUser(username, password);
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

export default { createUser };
