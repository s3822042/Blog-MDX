-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,
    "userName" TEXT NOT NULL DEFAULT 'Anonymous user',

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Views" (
    "slug" VARCHAR(128) NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("slug")
);
