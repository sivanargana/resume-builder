/*
  Warnings:

  - Added the required column `updatedAt` to the `AvailabilityType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `EducationType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `EmploymentType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExperienceMonth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExperienceYear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Proficiency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SalaryBreakdown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WorkStatus` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AvailabilityType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_AvailabilityType" ("id", "name") SELECT "id", "name" FROM "AvailabilityType";
DROP TABLE "AvailabilityType";
ALTER TABLE "new_AvailabilityType" RENAME TO "AvailabilityType";
CREATE TABLE "new_EducationType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EducationType" ("id", "name") SELECT "id", "name" FROM "EducationType";
DROP TABLE "EducationType";
ALTER TABLE "new_EducationType" RENAME TO "EducationType";
CREATE TABLE "new_EmploymentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EmploymentType" ("id", "name") SELECT "id", "name" FROM "EmploymentType";
DROP TABLE "EmploymentType";
ALTER TABLE "new_EmploymentType" RENAME TO "EmploymentType";
CREATE TABLE "new_ExperienceMonth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ExperienceMonth" ("id", "name") SELECT "id", "name" FROM "ExperienceMonth";
DROP TABLE "ExperienceMonth";
ALTER TABLE "new_ExperienceMonth" RENAME TO "ExperienceMonth";
CREATE TABLE "new_ExperienceYear" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ExperienceYear" ("id", "name") SELECT "id", "name" FROM "ExperienceYear";
DROP TABLE "ExperienceYear";
ALTER TABLE "new_ExperienceYear" RENAME TO "ExperienceYear";
CREATE TABLE "new_Proficiency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Proficiency" ("id", "name") SELECT "id", "name" FROM "Proficiency";
DROP TABLE "Proficiency";
ALTER TABLE "new_Proficiency" RENAME TO "Proficiency";
CREATE TABLE "new_SalaryBreakdown" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SalaryBreakdown" ("id", "name") SELECT "id", "name" FROM "SalaryBreakdown";
DROP TABLE "SalaryBreakdown";
ALTER TABLE "new_SalaryBreakdown" RENAME TO "SalaryBreakdown";
CREATE TABLE "new_WorkStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_WorkStatus" ("id", "name") SELECT "id", "name" FROM "WorkStatus";
DROP TABLE "WorkStatus";
ALTER TABLE "new_WorkStatus" RENAME TO "WorkStatus";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
