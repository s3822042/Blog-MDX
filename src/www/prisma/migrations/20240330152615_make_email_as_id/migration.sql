/*
  Warnings:

  - The primary key for the `Newsletter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Newsletter` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `Newsletter` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(128)`.

*/
-- AlterTable
ALTER TABLE "Newsletter" DROP CONSTRAINT "Newsletter_pkey",
DROP COLUMN "id",
ALTER COLUMN "email" SET DATA TYPE VARCHAR(128),
ADD CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("email");
