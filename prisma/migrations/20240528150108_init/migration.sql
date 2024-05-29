-- CreateTable
CREATE TABLE "Permit" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    "requirements" JSONB NOT NULL,

    CONSTRAINT "Permit_pkey" PRIMARY KEY ("id")
);
