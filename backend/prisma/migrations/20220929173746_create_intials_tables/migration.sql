-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "participation" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);