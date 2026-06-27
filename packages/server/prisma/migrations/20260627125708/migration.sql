/*
  Warnings:

  - You are about to alter the column `salaryAmount` on the `BasicDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `currentSalary` on the `Experience` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `monthlyStipend` on the `Experience` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
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
    "photo" TEXT,
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
INSERT INTO "new_BasicDetails" ("availabilityTypeId", "country", "createdAt", "experienceMonthId", "experienceYearId", "id", "location", "photo", "salaryAmount", "salaryBreakdownId", "updatedAt", "userId") SELECT "availabilityTypeId", "country", "createdAt", "experienceMonthId", "experienceYearId", "id", "location", "photo", "salaryAmount", "salaryBreakdownId", "updatedAt", "userId" FROM "BasicDetails";
DROP TABLE "BasicDetails";
ALTER TABLE "new_BasicDetails" RENAME TO "BasicDetails";
CREATE UNIQUE INDEX "BasicDetails_userId_key" ON "BasicDetails"("userId");
CREATE INDEX "BasicDetails_experienceYearId_idx" ON "BasicDetails"("experienceYearId");
CREATE INDEX "BasicDetails_experienceMonthId_idx" ON "BasicDetails"("experienceMonthId");
CREATE INDEX "BasicDetails_salaryBreakdownId_idx" ON "BasicDetails"("salaryBreakdownId");
CREATE INDEX "BasicDetails_availabilityTypeId_idx" ON "BasicDetails"("availabilityTypeId");
CREATE TABLE "new_Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "employmentTypeId" TEXT NOT NULL,
    "availabilityTypeId" TEXT NOT NULL,
    "isCurrentEmployment" BOOLEAN NOT NULL,
    "companyName" TEXT,
    "jobTitle" TEXT,
    "department" TEXT,
    "location" TEXT,
    "joiningDate" DATETIME,
    "workedTill" DATETIME,
    "monthlyStipend" INTEGER,
    "currentSalary" INTEGER,
    "totalExperience" INTEGER,
    "jobProfile" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Experience_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "EmploymentType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Experience_availabilityTypeId_fkey" FOREIGN KEY ("availabilityTypeId") REFERENCES "AvailabilityType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Experience" ("availabilityTypeId", "companyName", "createdAt", "currentSalary", "department", "employmentTypeId", "id", "isCurrentEmployment", "jobProfile", "jobTitle", "joiningDate", "location", "monthlyStipend", "totalExperience", "updatedAt", "userId", "workedTill") SELECT "availabilityTypeId", "companyName", "createdAt", "currentSalary", "department", "employmentTypeId", "id", "isCurrentEmployment", "jobProfile", "jobTitle", "joiningDate", "location", "monthlyStipend", "totalExperience", "updatedAt", "userId", "workedTill" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE INDEX "Experience_userId_idx" ON "Experience"("userId");
CREATE INDEX "Experience_employmentTypeId_idx" ON "Experience"("employmentTypeId");
CREATE INDEX "Experience_availabilityTypeId_idx" ON "Experience"("availabilityTypeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
