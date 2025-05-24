import { generateToken } from "../utills/generatejwt"; // ✅ TANPA .ts di path
import type { Request, Response } from "express";

async function authUser(req: Request, res: Response) {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const data = await generateToken(username);
    res.status(201).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

export default { authUser };
