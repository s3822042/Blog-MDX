-- CreateTable
CREATE TABLE "Newsletter" (
    "jd" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "isRegister" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("jd")
);
