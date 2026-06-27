/*
  Warnings:

  - You are about to drop the column `year` on the `ExperienceMonth` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `ExperienceYear` table. All the data in the column will be lost.
  - Added the required column `name` to the `ExperienceMonth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ExperienceYear` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExperienceMonth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_ExperienceMonth" ("id") SELECT "id" FROM "ExperienceMonth";
DROP TABLE "ExperienceMonth";
ALTER TABLE "new_ExperienceMonth" RENAME TO "ExperienceMonth";
CREATE TABLE "new_ExperienceYear" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_ExperienceYear" ("id") SELECT "id" FROM "ExperienceYear";
DROP TABLE "ExperienceYear";
ALTER TABLE "new_ExperienceYear" RENAME TO "ExperienceYear";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
