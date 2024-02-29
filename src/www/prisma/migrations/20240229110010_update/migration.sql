/*
  Warnings:

  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `articleId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "postId",
DROP COLUMN "userName",
ADD COLUMN     "articleId" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL;
