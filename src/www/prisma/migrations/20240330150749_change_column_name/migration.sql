/*
  Warnings:

  - The primary key for the `Newsletter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isRegister` on the `Newsletter` table. All the data in the column will be lost.
  - You are about to drop the column `jd` on the `Newsletter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Newsletter" DROP CONSTRAINT "Newsletter_pkey",
DROP COLUMN "isRegister",
DROP COLUMN "jd",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "isRegistered" BOOLEAN NOT NULL DEFAULT false,
ADD CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id");
