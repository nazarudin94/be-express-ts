import bcrypt from "bcryptjs";
import prisma from "../../prisma/client";
async function createUser(username: string, password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const newUser = await prisma.user.create({
    data: { username, password: hash },
  });
  return newUser;
}

export default {
  createUser,
};
