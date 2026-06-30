/*
  Warnings:

  - You are about to drop the column `availabilityTypeId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `currentSalary` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyStipend` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `totalExperience` on the `Experience` table. All the data in the column will be lost.
  - Made the column `companyName` on table `Experience` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jobTitle` on table `Experience` required. This step will fail if there are existing NULL values in that column.
  - Made the column `joiningDate` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "employmentTypeId" TEXT NOT NULL,
    "isCurrentEmployment" BOOLEAN NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "joiningDate" TEXT NOT NULL,
    "workedTill" TEXT,
    "jobProfile" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Experience_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "EmploymentType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Experience" ("companyName", "createdAt", "employmentTypeId", "id", "isCurrentEmployment", "jobProfile", "jobTitle", "joiningDate", "updatedAt", "userId", "workedTill") SELECT "companyName", "createdAt", "employmentTypeId", "id", "isCurrentEmployment", "jobProfile", "jobTitle", "joiningDate", "updatedAt", "userId", "workedTill" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE INDEX "Experience_userId_idx" ON "Experience"("userId");
CREATE INDEX "Experience_employmentTypeId_idx" ON "Experience"("employmentTypeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
