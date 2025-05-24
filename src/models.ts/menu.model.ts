import prisma from "../../prisma/client";
import { Prisma } from "@prisma/client";
async function createMenu(
  name: string,
  url: string,
  page: string,
  status: string,
  menu_grup_id: number,
  description: string,
  roleId: number
) {
  // 1. Buat menu baru
  const newMenu = await prisma.menu.create({
    data: {
      name,
      url,
      page,
      status,
      menu_grup_id,
      description,
    },
  });

  // 2. Buat role_menu secara otomatis
  await prisma.role_Menu.create({
    data: {
      id_menu: newMenu.id,
      id_role: roleId,
    },
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

async function getMenu() {
  const getMenu = await prisma.menu.findMany({
    include: {
      menuGrup: true,
    },
  });
  return getMenu;
}

async function getMenuGrup() {
  const getMenu = await prisma.menuGrup.findMany();
  return getMenu;
}

async function getMenuById(id: number) {
  console.log(id);
  const getMenu = await prisma.menu.findUnique({
    where: {
      id: id,
    },
    include: {
      menuGrup: true,
    },
  });
  return getMenu;
}

async function deleteMenuById(id: number) {
  // 1. Hapus semua role_menu terkait
  await prisma.role_Menu.deleteMany({
    where: {
      id_menu: id,
    },
  });
  const deletedMenu = await prisma.menu.delete({
    where: {
      id: id,
    },
  });
  return deletedMenu;
}

async function deleteGrupMenuById(id: number) {
  const deletedMenu = await prisma.menuGrup.delete({
    where: {
      id: id,
    },
  });
  return deletedMenu;
}

async function getGrupMenuById(id: number) {
  const getMenu = await prisma.menuGrup.findUnique({
    where: {
      id: id,
    },
  });
  return getMenu;
}

async function updateMenu(
  name: string,
  url: string,
  status: string,
  page: string,
  menu_grup_id: number,
  description: string,
  id: number
) {
  const updateMenu = await prisma.menu.update({
    where: {
      id: id,
    },
    data: {
      name,
      url,
      status,
      page,
      menu_grup_id,
      description,
    },
  });
  return updateMenu;
}

async function updateGrupMenu(name: string, id: number) {
  const updateMenu = await prisma.menuGrup.update({
    where: {
      id: id,
    },
    data: {
      name,
    },
  });
  return updateMenu;
}

export default {
  updateGrupMenu,
  getMenu,
  createMenu,
  createMenuGrup,
  getMenuById,
  updateMenu,
  getGrupMenuById,
  getMenuGrup,
  deleteMenuById,
  deleteGrupMenuById,
};
