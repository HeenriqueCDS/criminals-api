-- CreateTable
CREATE TABLE "Criminal" (
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "forename" TEXT,
    "birthdate" TEXT,
    "image" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Criminal_identifier_key" ON "Criminal"("identifier");
