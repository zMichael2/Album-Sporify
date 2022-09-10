/*
  Warnings:

  - You are about to drop the column `userID` on the `registros` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `artistaID` to the `registros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `registros` DROP FOREIGN KEY `registros_userID_fkey`;

-- AlterTable
ALTER TABLE `registros` DROP COLUMN `userID`,
    ADD COLUMN `artistaID` INTEGER NOT NULL;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Artista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `registros` ADD CONSTRAINT `registros_artistaID_fkey` FOREIGN KEY (`artistaID`) REFERENCES `Artista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
