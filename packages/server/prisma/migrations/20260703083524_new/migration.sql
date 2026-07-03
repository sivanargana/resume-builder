/*
  Warnings:

  - You are about to drop the column `type` on the `Project` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "client" TEXT,
    "status" TEXT,
    "startYear" TEXT,
    "endYear" TEXT,
    "details" TEXT,
    "location" TEXT,
    "site" TEXT,
    "teamSize" TEXT,
    "role" TEXT,
    "roleDescription" TEXT,
    "skillsUsed" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "employmentTypeId" TEXT,
    CONSTRAINT "Project_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "EmploymentType" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("client", "createdAt", "details", "endYear", "id", "location", "role", "roleDescription", "site", "skillsUsed", "startYear", "status", "teamSize", "title", "updatedAt", "userId") SELECT "client", "createdAt", "details", "endYear", "id", "location", "role", "roleDescription", "site", "skillsUsed", "startYear", "status", "teamSize", "title", "updatedAt", "userId" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE INDEX "Project_userId_idx" ON "Project"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
