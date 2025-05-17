-- AlterTable
ALTER TABLE `role` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `userrole` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role_Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_role` INTEGER NOT NULL,
    `id_menu` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Role_Menu_id_role_id_menu_key`(`id_role`, `id_menu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Role_Menu` ADD CONSTRAINT `Role_Menu_id_menu_fkey` FOREIGN KEY (`id_menu`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_Menu` ADD CONSTRAINT `Role_Menu_id_role_fkey` FOREIGN KEY (`id_role`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
