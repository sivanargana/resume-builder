import { prisma } from "../../client";

export const service = {
  async read(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,
        createdAt: true,
        updatedAt: true,
        basicDetails: true,
        headline: true,
        profileSummary: true,
        skills: true,
        educations: true,
        experiences: { include: { skills: true } },
        projects: true,
        languages: true,
      },
    });
  },

  async update(userId: string, body: any) {
    const { basicDetails, headline, profileSummary, ...userFields } = body;
    return await prisma.user.update({
      where: { id: userId },
      data: {
        ...userFields,
        basicDetails: basicDetails
          ? { upsert: { update: basicDetails, create: basicDetails } }
          : undefined,
        headline:
          headline !== undefined
            ? {
                upsert: {
                  update: { value: headline },
                  create: { value: headline },
                },
              }
            : undefined,
        profileSummary:
          profileSummary !== undefined
            ? {
                upsert: {
                  update: { summary: profileSummary },
                  create: { summary: profileSummary },
                },
              }
            : undefined,
      },
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,
        createdAt: true,
        updatedAt: true,
        basicDetails: true,
        headline: true,
        profileSummary: true,
      },
    });
  },
};
