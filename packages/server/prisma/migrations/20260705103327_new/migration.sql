-- CreateTable
CREATE TABLE "WorkStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ExperienceYear" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ExperienceMonth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SalaryBreakdown" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AvailabilityType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "EmploymentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "EducationType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Proficiency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL DEFAULT '',
    "provider" TEXT NOT NULL DEFAULT 'EMAIL',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BasicDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "workStatusId" TEXT,
    "experienceYearId" TEXT NOT NULL,
    "experienceMonthId" TEXT NOT NULL,
    "salaryBreakdownId" TEXT NOT NULL,
    "availabilityTypeId" TEXT NOT NULL,
    "salaryAmount" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BasicDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_experienceYearId_fkey" FOREIGN KEY ("experienceYearId") REFERENCES "ExperienceYear" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_experienceMonthId_fkey" FOREIGN KEY ("experienceMonthId") REFERENCES "ExperienceMonth" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_salaryBreakdownId_fkey" FOREIGN KEY ("salaryBreakdownId") REFERENCES "SalaryBreakdown" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_availabilityTypeId_fkey" FOREIGN KEY ("availabilityTypeId") REFERENCES "AvailabilityType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasicDetails_workStatusId_fkey" FOREIGN KEY ("workStatusId") REFERENCES "WorkStatus" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Headline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Headline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avtar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Avtar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProfileSummary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProfileSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserSkill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserSkill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserLanguage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "proficiencyId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL,
    "write" BOOLEAN NOT NULL,
    "speak" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserLanguage_proficiencyId_fkey" FOREIGN KEY ("proficiencyId") REFERENCES "Proficiency" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLanguage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "educationTypeId" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "specialization" TEXT,
    "startYear" TEXT,
    "endYear" TEXT,
    "gradeSystem" TEXT,
    "marks" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Education_educationTypeId_fkey" FOREIGN KEY ("educationTypeId") REFERENCES "EducationType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Experience" (
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

-- CreateTable
CREATE TABLE "Project" (
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

-- CreateIndex
CREATE UNIQUE INDEX "WorkStatus_name_key" ON "WorkStatus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceYear_name_key" ON "ExperienceYear"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceMonth_name_key" ON "ExperienceMonth"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SalaryBreakdown_name_key" ON "SalaryBreakdown"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AvailabilityType_name_key" ON "AvailabilityType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EmploymentType_name_key" ON "EmploymentType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EducationType_name_key" ON "EducationType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Proficiency_name_key" ON "Proficiency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BasicDetails_userId_key" ON "BasicDetails"("userId");

-- CreateIndex
CREATE INDEX "BasicDetails_experienceYearId_idx" ON "BasicDetails"("experienceYearId");

-- CreateIndex
CREATE INDEX "BasicDetails_experienceMonthId_idx" ON "BasicDetails"("experienceMonthId");

-- CreateIndex
CREATE INDEX "BasicDetails_salaryBreakdownId_idx" ON "BasicDetails"("salaryBreakdownId");

-- CreateIndex
CREATE INDEX "BasicDetails_availabilityTypeId_idx" ON "BasicDetails"("availabilityTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Headline_userId_key" ON "Headline"("userId");

-- CreateIndex
CREATE INDEX "Headline_userId_idx" ON "Headline"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Avtar_userId_key" ON "Avtar"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Avtar_url_key" ON "Avtar"("url");

-- CreateIndex
CREATE INDEX "Avtar_userId_idx" ON "Avtar"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSummary_userId_key" ON "ProfileSummary"("userId");

-- CreateIndex
CREATE INDEX "ProfileSummary_userId_idx" ON "ProfileSummary"("userId");

-- CreateIndex
CREATE INDEX "UserSkill_userId_idx" ON "UserSkill"("userId");

-- CreateIndex
CREATE INDEX "UserSkill_skillId_idx" ON "UserSkill"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSkill_userId_skillId_key" ON "UserSkill"("userId", "skillId");

-- CreateIndex
CREATE INDEX "UserLanguage_userId_idx" ON "UserLanguage"("userId");

-- CreateIndex
CREATE INDEX "UserLanguage_languageId_idx" ON "UserLanguage"("languageId");

-- CreateIndex
CREATE INDEX "UserLanguage_proficiencyId_idx" ON "UserLanguage"("proficiencyId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLanguage_userId_languageId_key" ON "UserLanguage"("userId", "languageId");

-- CreateIndex
CREATE INDEX "Education_userId_idx" ON "Education"("userId");

-- CreateIndex
CREATE INDEX "Education_educationTypeId_idx" ON "Education"("educationTypeId");

-- CreateIndex
CREATE INDEX "Experience_userId_idx" ON "Experience"("userId");

-- CreateIndex
CREATE INDEX "Experience_employmentTypeId_idx" ON "Experience"("employmentTypeId");

-- CreateIndex
CREATE INDEX "Project_userId_idx" ON "Project"("userId");
