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
        picture: true,
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
        projects: {
          include: {
            type: true,
          },
        },
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
    const { id, firstName, lastName, mobile, email, provider, picture, avtar, ...rest } = response;
    const checks = [!!(avtar || picture), !!rest?.basicDetails, !!rest?.headline, !!rest?.profileSummary, rest?.userSkills?.length > 0, rest?.experiences?.length > 0, rest?.education?.length > 0, rest?.projects?.length > 0, rest?.userLanguages?.length > 0];
    const completed = checks.filter(Boolean);
    const progress = Math.round((completed?.length / checks?.length) * 100);
    console.log(progress);
    return {
      user: {
        id,
        firstName,
        lastName,
        mobile,
        email,
        provider,
        picture,
        avtar,
        progress,
      },
      ...rest,
    };
  },
};
