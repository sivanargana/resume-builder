import { prisma } from "../../client";

export const service = {
  async read(userId: string) {
    let workStatus = await prisma.workStatus.findMany();
    let experienceYear = await prisma.experienceYear.findMany();
    let experienceMonth = await prisma.experienceMonth.findMany();
    let salaryBreakdown = await prisma.salaryBreakdown.findMany();
    let availabilityType = await prisma.availabilityType.findMany();
    let employmentType = await prisma.employmentType.findMany();
    let educationType = await prisma.educationType.findMany();
    let proficiency = await prisma.proficiency.findMany();
    let skill = await prisma.skill.findMany();
    let language = await prisma.language.findMany();
    let profile = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,

        basicDetails: {
          include: {
            experienceYear: true,
            experienceMonth: true,
            salaryBreakdown: true,
            availabilityType: true,
          },
        },
        headline: true,
        profileSummary: true,
        userSkills: {
          select: {
            skill: true,
          },
        },
        experiences: {
          include: {
            employmentType: true,
          },
        },
        education: {
          include: {
            educationType: true,
          },
        },
        projects: true,
        userLanguages: {
          select: {
            language: true,
            proficiency: true,
          },
        },
      },
    });
    return {
      workStatus,
      experienceYear,
      experienceMonth,
      salaryBreakdown,
      availabilityType,
      employmentType,
      educationType,
      proficiency,
      skill,
      language,
      profile,
    };
  },
};
