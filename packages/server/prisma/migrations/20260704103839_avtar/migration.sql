-- CreateTable
CREATE TABLE "Avtar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Avtar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Avtar_userId_key" ON "Avtar"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Avtar_url_key" ON "Avtar"("url");

-- CreateIndex
CREATE INDEX "Avtar_userId_idx" ON "Avtar"("userId");
