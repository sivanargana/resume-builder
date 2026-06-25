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
};
