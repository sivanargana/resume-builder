/*
  Warnings:

  - You are about to drop the column `photo` on the `BasicDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "photo" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BasicDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "experienceYearId" TEXT NOT NULL,
    "experienceMonthId" TEXT NOT NULL,
    "salaryBreakdownId" TEXT NOT NULL,
    "availabilityTypeId" TEXT NOT NULL,
    "salaryAmount" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BasicDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_experienceYearId_fkey" FOREIGN KEY ("experienceYearId") REFERENCES "ExperienceYear" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_experienceMonthId_fkey" FOREIGN KEY ("experienceMonthId") REFERENCES "ExperienceMonth" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_salaryBreakdownId_fkey" FOREIGN KEY ("salaryBreakdownId") REFERENCES "SalaryBreakdown" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_availabilityTypeId_fkey" FOREIGN KEY ("availabilityTypeId") REFERENCES "AvailabilityType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BasicDetails" ("availabilityTypeId", "country", "createdAt", "experienceMonthId", "experienceYearId", "id", "location", "salaryAmount", "salaryBreakdownId", "updatedAt", "userId") SELECT "availabilityTypeId", "country", "createdAt", "experienceMonthId", "experienceYearId", "id", "location", "salaryAmount", "salaryBreakdownId", "updatedAt", "userId" FROM "BasicDetails";
DROP TABLE "BasicDetails";
ALTER TABLE "new_BasicDetails" RENAME TO "BasicDetails";
CREATE UNIQUE INDEX "BasicDetails_userId_key" ON "BasicDetails"("userId");
CREATE INDEX "BasicDetails_experienceYearId_idx" ON "BasicDetails"("experienceYearId");
CREATE INDEX "BasicDetails_experienceMonthId_idx" ON "BasicDetails"("experienceMonthId");
CREATE INDEX "BasicDetails_salaryBreakdownId_idx" ON "BasicDetails"("salaryBreakdownId");
CREATE INDEX "BasicDetails_availabilityTypeId_idx" ON "BasicDetails"("availabilityTypeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
