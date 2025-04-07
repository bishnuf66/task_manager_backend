/*
  Warnings:

  - You are about to drop the `subtask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `subtask` DROP FOREIGN KEY `SubTask_taskId_fkey`;

-- DropTable
DROP TABLE `subtask`;
