import jwt from "jsonwebtoken";

export function generateToken(username: string) {
  const JWT_SECRET = "your-secret-key";

  const token = jwt.sign({ username }, JWT_SECRET, {
    expiresIn: "1d", // Token expires in 1 day
  });

  return token;
}
