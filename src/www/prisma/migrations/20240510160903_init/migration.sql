-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "articleId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Views" (
    "slug" VARCHAR(128) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Newsletter" (
    "email" VARCHAR(128) NOT NULL,
    "isRegistered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("email")
);
