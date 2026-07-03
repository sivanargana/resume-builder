-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Education" (
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
INSERT INTO "new_Education" ("course", "createdAt", "educationTypeId", "endYear", "gradeSystem", "id", "marks", "specialization", "startYear", "university", "updatedAt", "userId") SELECT "course", "createdAt", "educationTypeId", "endYear", "gradeSystem", "id", "marks", "specialization", "startYear", "university", "updatedAt", "userId" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE INDEX "Education_userId_idx" ON "Education"("userId");
CREATE INDEX "Education_educationTypeId_idx" ON "Education"("educationTypeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
