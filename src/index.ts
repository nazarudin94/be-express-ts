import express from "express";
import userRouter from "./routes.ts/user"; // path disesuaikan
import menuRouter from "./routes.ts/menu"; // path disesuaikan
import authRouter from "./routes.ts/login"; // path disesuaikan

const app = express();
app.use(express.json());

app.use("/users", userRouter); // router digunakan di path yang sesuai
app.use("/menu", menuRouter); // router digunakan di path yang sesuai
app.use("/auth", authRouter); // router digunakan di path yang sesuai

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
