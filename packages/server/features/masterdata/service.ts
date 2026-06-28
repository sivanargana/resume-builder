import { prisma } from "../../client";

export const service = {
  async masterdata() {
    let workStatus = await prisma.workStatus.findMany();
    let experienceYear = await prisma.experienceYear.findMany();
    let experienceMonth = await prisma.experienceMonth.findMany();
    let salaryBreakdown = await prisma.salaryBreakdown.findMany();
    let availabilityType = await prisma.availabilityType.findMany();
    let employmentType = await prisma.employmentType.findMany();
    let educationType = await prisma.educationType.findMany();
    let proficiency = await prisma.proficiency.findMany();
    let skills = await prisma.skill.findMany();
    let language = await prisma.language.findMany();

    return {
      workStatus,
      experienceYear,
      experienceMonth,
      salaryBreakdown,
      availabilityType,
      employmentType,
      educationType,
      proficiency,
      skills,
      language,
    };
  },
};
