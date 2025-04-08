/*
  Warnings:

  - The values [IN_PROGRESS,CANCELED] on the enum `Task_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `task` MODIFY `status` ENUM('PENDING', 'COMPLETED') NOT NULL DEFAULT 'PENDING';
