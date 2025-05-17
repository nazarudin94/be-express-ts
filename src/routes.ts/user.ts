import express, { type Request, type Response } from "express";
import prisma from "../../prisma/client";
import bcrypt from "bcryptjs";

const router = express.Router();

// POST /users
router.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await prisma.user.create({
      data: { username, password: hash },
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(409).json({ message: "Username already exists" });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
});

export default router;
