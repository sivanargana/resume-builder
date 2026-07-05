import { prisma } from "../../client";

export const service = {
  async read(userId: string) {
    let response: any = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        mobile: true,
        provider: true,
        email: true,
        avtar: true,
        basicDetails: {
          include: {
            workStatus: true,
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
            id: true,
            language: true,
            proficiency: true,
            read: true,
            write: true,
            speak: true,
          },
        },
      },
    });
    const { id, firstName, lastName, mobile, email, provider, avtar, ...rest } = response;

    return {
      user: {
        id,
        firstName,
        lastName,
        mobile,
        email,
        provider,
        avtar,
      },
      ...rest,
    };
  },
};
