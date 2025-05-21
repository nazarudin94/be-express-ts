import prisma from "../../prisma/client";
import { Prisma } from "@prisma/client";
async function createMenu(
  nama: string,
  url: string,
  page: string,
  status: string,
  menu_grup_id: number
) {
  const newMenu = await prisma.menu.create({
    data: {
      name: nama,
      url,
      page,
      status,
      menu_grup_id,
    } as Prisma.MenuUncheckedCreateInput,
  });
  return newMenu;
}

async function createMenuGrup(nama: string) {
  const newMenuGrup = await prisma.menuGrup.create({
    data: {
      name: nama,
    },
  });
  return newMenuGrup;
}

export default {
  createMenu,
  createMenuGrup,
};
