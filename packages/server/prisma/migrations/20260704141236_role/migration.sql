/*
  Warnings:

  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workStatusId" TEXT,
    "fullName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_workStatusId_fkey" FOREIGN KEY ("workStatusId") REFERENCES "WorkStatus" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("createdAt", "email", "fullName", "id", "mobile", "password", "updatedAt", "workStatusId") SELECT "createdAt", "email", "fullName", "id", "mobile", "password", "updatedAt", "workStatusId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_workStatusId_idx" ON "User"("workStatusId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
