import { prisma } from "../../client";

export const service = {
  async read(userId: string) {
    let response: any = await prisma.user.findUnique({
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
    const { id, fullName, mobile, email, workStatus, ...rest } = response;

    return {
      user: {
        id,
        fullName,
        mobile,
        email,
        workStatus,
      },
      ...rest,
    };
  },
};
