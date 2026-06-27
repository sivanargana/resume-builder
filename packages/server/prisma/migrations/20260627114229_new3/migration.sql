-- DropIndex
DROP INDEX "BasicDetails_userId_idx";

-- CreateIndex
CREATE INDEX "BasicDetails_experienceYearId_idx" ON "BasicDetails"("experienceYearId");

-- CreateIndex
CREATE INDEX "BasicDetails_experienceMonthId_idx" ON "BasicDetails"("experienceMonthId");

-- CreateIndex
CREATE INDEX "BasicDetails_salaryBreakdownId_idx" ON "BasicDetails"("salaryBreakdownId");

-- CreateIndex
CREATE INDEX "BasicDetails_availabilityTypeId_idx" ON "BasicDetails"("availabilityTypeId");

-- CreateIndex
CREATE INDEX "Education_educationTypeId_idx" ON "Education"("educationTypeId");

-- CreateIndex
CREATE INDEX "Experience_availabilityTypeId_idx" ON "Experience"("availabilityTypeId");

-- CreateIndex
CREATE INDEX "Headline_userId_idx" ON "Headline"("userId");

-- CreateIndex
CREATE INDEX "ProfileSummary_userId_idx" ON "ProfileSummary"("userId");

-- CreateIndex
CREATE INDEX "UserSkill_skillId_idx" ON "UserSkill"("skillId");
