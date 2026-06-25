/*
  Warnings:

  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateLanguage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `candidateId` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `candidateId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `isCurrent` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `joiningMonth` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `joiningYear` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `relievingMonth` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `relievingYear` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `skillsUsed` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `workMode` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `candidateId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Project` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCurrentEmployment` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proficiency` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `read` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speak` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `write` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Candidate_email_key";

-- DropIndex
DROP INDEX "Candidate_mobile_key";

-- DropIndex
DROP INDEX "CandidateLanguage_candidateId_languageId_key";

-- DropIndex
DROP INDEX "CandidateSkill_candidateId_skillId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Candidate";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CandidateLanguage";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CandidateSkill";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "workStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BasicDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT,
    "experienceYears" INTEGER NOT NULL,
    "experienceMonths" INTEGER NOT NULL,
    "salaryAmount" INTEGER NOT NULL,
    "salaryBreakdown" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "BasicDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Headline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Headline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProfileSummary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "summary" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ProfileSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExperienceSkill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "experienceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "ExperienceSkill_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "education" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "specialization" TEXT,
    "type" TEXT NOT NULL,
    "startYear" INTEGER,
    "endYear" INTEGER,
    "gradeSystem" TEXT,
    "marks" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Education" ("course", "education", "endYear", "gradeSystem", "id", "marks", "specialization", "startYear", "type", "university") SELECT "course", "education", "endYear", "gradeSystem", "id", "marks", "specialization", "startYear", "type", "university" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE TABLE "new_Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isCurrentEmployment" BOOLEAN NOT NULL,
    "employmentType" TEXT NOT NULL,
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
    "noticePeriod" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Experience" ("companyName", "currentSalary", "employmentType", "id", "jobProfile", "jobTitle", "location", "monthlyStipend") SELECT "companyName", "currentSalary", "employmentType", "id", "jobProfile", "jobTitle", "location", "monthlyStipend" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE TABLE "new_Language" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "proficiency" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL,
    "write" BOOLEAN NOT NULL,
    "speak" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Language_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Language" ("id", "name") SELECT "id", "name" FROM "Language";
DROP TABLE "Language";
ALTER TABLE "new_Language" RENAME TO "Language";
CREATE UNIQUE INDEX "Language_userId_name_key" ON "Language"("userId", "name");
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "client" TEXT,
    "status" TEXT,
    "startYear" INTEGER,
    "endYear" INTEGER,
    "details" TEXT,
    "location" TEXT,
    "site" TEXT,
    "type" TEXT,
    "teamSize" INTEGER,
    "role" TEXT,
    "roleDescription" TEXT,
    "skillsUsed" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("client", "details", "endYear", "id", "location", "role", "roleDescription", "site", "skillsUsed", "startYear", "status", "teamSize", "title", "type") SELECT "client", "details", "endYear", "id", "location", "role", "roleDescription", "site", "skillsUsed", "startYear", "status", "teamSize", "title", "type" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("id", "name") SELECT "id", "name" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
CREATE UNIQUE INDEX "Skill_userId_name_key" ON "Skill"("userId", "name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BasicDetails_userId_key" ON "BasicDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Headline_userId_key" ON "Headline"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSummary_userId_key" ON "ProfileSummary"("userId");
