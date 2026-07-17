import { prisma } from "../../client";

export const service = {
  async getCounts() {
    const [usersCount, skillsCount, languagesCount, proficiencyCount, workStatusCount, experienceYearCount, experienceMonthCount, salaryBreakdownCount, availabilityTypeCount, employmentTypeCount, educationTypeCount] = await Promise.all([prisma.user.count(), prisma.skill.count(), prisma.language.count(), prisma.proficiency.count(), prisma.workStatus.count(), prisma.experienceYear.count(), prisma.experienceMonth.count(), prisma.salaryBreakdown.count(), prisma.availabilityType.count(), prisma.employmentType.count(), prisma.educationType.count()]);

    return {
      users: usersCount,
      skills: skillsCount,
      languages: languagesCount,
      proficiency: proficiencyCount,
      workStatus: workStatusCount,
      experienceYear: experienceYearCount,
      experienceMonth: experienceMonthCount,
      salaryBreakdown: salaryBreakdownCount,
      availabilityType: availabilityTypeCount,
      employmentType: employmentTypeCount,
      educationType: educationTypeCount,
    };
  },
};
