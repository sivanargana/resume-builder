import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "./client";

async function main() {
  console.log("🌱 Seeding database...");

  // ─── Lookup / Reference Tables ───────────────────────────────────────────────

  // WorkStatus
  const workStatuses: any = await Promise.all(
    ["Actively Looking", "Open to Offers", "Not Looking"].map((name) =>
      prisma.workStatus.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ WorkStatus seeded");

  // ExperienceYear
  const experienceYears: any = await Promise.all(
    ["Fresher", "1 Year", "2 Years", "3 Years", "5 Years", "10+ Years"].map((name) =>
      prisma.experienceYear.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ ExperienceYear seeded");

  // ExperienceMonth
  const experienceMonths: any = await Promise.all(
    ["0 Months", "1 Month", "2 Months", "3 Months", "6 Months", "9 Months", "11 Months"].map((name) =>
      prisma.experienceMonth.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ ExperienceMonth seeded");

  // SalaryBreakdown
  const salaryBreakdowns: any = await Promise.all(
    ["Per Annum", "Per Month", "Per Hour"].map((name) =>
      prisma.salaryBreakdown.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ SalaryBreakdown seeded");

  // AvailabilityType
  const availabilityTypes: any = await Promise.all(
    ["Immediate", "15 Days", "30 Days", "60 Days", "90 Days"].map((name) =>
      prisma.availabilityType.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ AvailabilityType seeded");

  // EmploymentType
  const employmentTypes: any = await Promise.all(
    ["Full-Time", "Part-Time", "Contract", "Freelance", "Internship"].map((name) =>
      prisma.employmentType.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ EmploymentType seeded");

  // EducationType
  const educationTypes: any = await Promise.all(
    ["Bachelor's Degree", "Master's Degree", "PhD", "Diploma", "High School", "Certification"].map((name) =>
      prisma.educationType.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ EducationType seeded");

  // Proficiency
  const proficiencies: any = await Promise.all(
    ["Beginner", "Elementary", "Intermediate", "Advanced", "Native"].map((name) =>
      prisma.proficiency.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ Proficiency seeded");

  // Skill
  const skillNames = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Prisma", "Docker", "AWS", "GraphQL"];
  const skills: any = await Promise.all(
    skillNames.map((name) =>
      prisma.skill.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ Skill seeded");

  // Language
  const languages: any = await Promise.all(
    ["English", "Hindi", "Telugu", "Tamil", "Kannada", "French", "Spanish"].map((name) =>
      prisma.language.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log("✅ Language seeded");

  // ─── Users ───────────────────────────────────────────────────────────────────

  const hashedPassword = await bcrypt.hash("Password@123", 10);

  const user1 = await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      firstName: "Alice",
      lastName: "Johnson",
      mobile: "9000000001",
      email: "alice@example.com",
      password: hashedPassword,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "bob@example.com" },
    update: {},
    create: {
      firstName: "Bob",
      lastName: "Smith",
      mobile: "9000000002",
      email: "bob@example.com",
      password: hashedPassword,
    },
  });

  console.log("✅ Users seeded");

  // ─── BasicDetails ─────────────────────────────────────────────────────────────
  // NOTE: `photo` removed — there is no such field on BasicDetails; it now lives on Avtar.
  // NOTE: `salaryAmount` is a String field on the schema, so both users use string values.

  await prisma.basicDetails.upsert({
    where: { userId: user1.id },
    update: {},
    create: {
      userId: user1.id,
      workStatusId: workStatuses[0].id, // Actively Looking
      experienceYearId: experienceYears[3].id, // 3 Years
      experienceMonthId: experienceMonths[3].id, // 3 Months
      salaryBreakdownId: salaryBreakdowns[0].id, // Per Annum
      availabilityTypeId: availabilityTypes[1].id, // 15 Days
      salaryAmount: "1200000",
      country: "India",
      location: "Hyderabad, Telangana",
    },
  });

  await prisma.basicDetails.upsert({
    where: { userId: user2.id },
    update: {},
    create: {
      userId: user2.id,
      workStatusId: workStatuses[1].id, // Open to Offers
      experienceYearId: experienceYears[5].id, // 10+ Years
      experienceMonthId: experienceMonths[0].id, // 0 Months
      salaryBreakdownId: salaryBreakdowns[0].id, // Per Annum
      availabilityTypeId: availabilityTypes[2].id, // 30 Days
      salaryAmount: "2500000",
      country: "India",
      location: "Bangalore, Karnataka",
    },
  });

  console.log("✅ BasicDetails seeded");

  // ─── Avtar (profile photo) ─────────────────────────────────────────────────────
  // NOTE: added — this is where the photo URLs belong per the schema.

  await prisma.avtar.upsert({
    where: { userId: user1.id },
    update: {},
    create: {
      userId: user1.id,
      url: "https://example.com/photos/alice.jpg",
    },
  });

  console.log("✅ Avtar seeded");

  // ─── Headline ─────────────────────────────────────────────────────────────────

  await prisma.headline.upsert({
    where: { userId: user1.id },
    update: {},
    create: {
      userId: user1.id,
      value: "Full Stack Developer | React & Node.js Enthusiast",
    },
  });

  await prisma.headline.upsert({
    where: { userId: user2.id },
    update: {},
    create: {
      userId: user2.id,
      value: "Senior Software Engineer | Cloud & DevOps Expert",
    },
  });

  console.log("✅ Headline seeded");

  // ─── ProfileSummary ───────────────────────────────────────────────────────────

  await prisma.profileSummary.upsert({
    where: { userId: user1.id },
    update: {},
    create: {
      userId: user1.id,
      summary: "Passionate full stack developer with 3+ years of experience building scalable web applications using React, Node.js, and PostgreSQL. Strong believer in clean code and test-driven development.",
    },
  });

  await prisma.profileSummary.upsert({
    where: { userId: user2.id },
    update: {},
    create: {
      userId: user2.id,
      summary: "Senior engineer with 10+ years of experience across fintech and e-commerce domains. Expertise in distributed systems, cloud infrastructure (AWS), and leading cross-functional teams.",
    },
  });

  console.log("✅ ProfileSummary seeded");

  // ─── UserSkills ───────────────────────────────────────────────────────────────

  const user1SkillIds = [skills[0].id, skills[1].id, skills[2].id, skills[3].id]; // JS, TS, React, Node
  const user2SkillIds = [skills[4].id, skills[7].id, skills[8].id, skills[6].id]; // Python, Docker, AWS, Prisma

  for (const skillId of user1SkillIds) {
    await prisma.userSkill.upsert({
      where: { userId_skillId: { userId: user1.id, skillId } },
      update: {},
      create: { userId: user1.id, skillId },
    });
  }

  for (const skillId of user2SkillIds) {
    await prisma.userSkill.upsert({
      where: { userId_skillId: { userId: user2.id, skillId } },
      update: {},
      create: { userId: user2.id, skillId },
    });
  }

  console.log("✅ UserSkills seeded");

  // ─── UserLanguages ────────────────────────────────────────────────────────────

  await prisma.userLanguage.upsert({
    where: { userId_languageId: { userId: user1.id, languageId: languages[0].id } },
    update: {},
    create: {
      userId: user1.id,
      languageId: languages[0].id, // English
      proficiencyId: proficiencies[3].id, // Advanced
      read: true,
      write: true,
      speak: true,
    },
  });

  await prisma.userLanguage.upsert({
    where: { userId_languageId: { userId: user1.id, languageId: languages[2].id } },
    update: {},
    create: {
      userId: user1.id,
      languageId: languages[2].id, // Telugu
      proficiencyId: proficiencies[4].id, // Native
      read: true,
      write: true,
      speak: true,
    },
  });

  await prisma.userLanguage.upsert({
    where: { userId_languageId: { userId: user2.id, languageId: languages[0].id } },
    update: {},
    create: {
      userId: user2.id,
      languageId: languages[0].id, // English
      proficiencyId: proficiencies[4].id, // Native
      read: true,
      write: true,
      speak: true,
    },
  });

  console.log("✅ UserLanguages seeded");

  // ─── Education ────────────────────────────────────────────────────────────────
  // NOTE: startYear/endYear are String? on the schema, so values are quoted.

  await prisma.education.createMany({
    data: [
      {
        userId: user1.id,
        educationTypeId: educationTypes[0].id, // Bachelor's
        university: "Osmania University",
        course: "Bachelor of Engineering",
        specialization: "Computer Science",
        startYear: "2017",
        endYear: "2021",
        gradeSystem: "CGPA",
        marks: "8.5",
      },
      {
        userId: user2.id,
        educationTypeId: educationTypes[0].id, // Bachelor's
        university: "Anna University",
        course: "B.Tech",
        specialization: "Information Technology",
        startYear: "2009",
        endYear: "2013",
        gradeSystem: "CGPA",
        marks: "9.1",
      },
      {
        userId: user2.id,
        educationTypeId: educationTypes[1].id, // Master's
        university: "IIT Madras",
        course: "M.Tech",
        specialization: "Software Systems",
        startYear: "2013",
        endYear: "2015",
        gradeSystem: "CGPA",
        marks: "9.4",
      },
    ],
  });

  console.log("✅ Education seeded");

  // ─── Experience ───────────────────────────────────────────────────────────────
  // NOTE: removed availabilityTypeId, department, location, monthlyStipend,
  // currentSalary, totalExperience — none of these fields exist on Experience.
  // NOTE: joiningDate/workedTill are String? on the schema, so values are quoted
  // instead of Date objects.

  await prisma.experience.createMany({
    data: [
      {
        userId: user1.id,
        employmentTypeId: employmentTypes[4].id, // Internship
        isCurrentEmployment: false,
        companyName: "StartupXYZ",
        jobTitle: "Frontend Intern",
        joiningDate: "2020-06-01",
        workedTill: "2020-12-01",
        jobProfile: "Built responsive UI components using React and integrated REST APIs.",
      },
      {
        userId: user1.id,
        employmentTypeId: employmentTypes[0].id, // Full-Time
        isCurrentEmployment: true,
        companyName: "TechCorp Pvt Ltd",
        jobTitle: "Full Stack Developer",
        joiningDate: "2021-07-01",
        jobProfile: "Developing and maintaining full stack features using React, Node.js, and PostgreSQL.",
      },
      {
        userId: user2.id,
        employmentTypeId: employmentTypes[0].id, // Full-Time
        isCurrentEmployment: true,
        companyName: "GlobalFintech Inc",
        jobTitle: "Senior Software Engineer",
        joiningDate: "2018-03-01",
        jobProfile: "Architecting microservices on AWS, leading a team of 8 engineers, and driving platform reliability initiatives.",
      },
    ],
  });

  console.log("✅ Experience seeded");

  // ─── Projects ─────────────────────────────────────────────────────────────────
  // NOTE: `type` is a relation to EmploymentType backed by the `employmentTypeId`
  // scalar, so it's set via employmentTypeId rather than a free-text string.
  // NOTE: teamSize/startYear/endYear are String? on the schema, so values are quoted.

  await prisma.project.createMany({
    data: [
      {
        userId: user1.id,
        title: "E-Commerce Platform",
        client: "RetailCo",
        status: "COMPLETED",
        startYear: "2022",
        endYear: "2022",
        details: "Built a full-featured e-commerce platform with product listings, cart, and payment integration.",
        location: "Hyderabad",
        site: "https://retailco.example.com",
        employmentTypeId: employmentTypes[0].id, // Full-Time
        teamSize: "4",
        role: "Full Stack Developer",
        roleDescription: "Led frontend development and integrated Stripe payment gateway.",
        skillsUsed: "React, Node.js, PostgreSQL, Stripe",
      },
      {
        userId: user1.id,
        title: "Task Management Tool",
        status: "INPROGRESS",
        startYear: "2023",
        details: "Internal tool for task tracking and team collaboration.",
        employmentTypeId: employmentTypes[1].id, // Part-Time
        teamSize: "2",
        role: "Backend Developer",
        roleDescription: "Designed REST API and database schema using Prisma ORM.",
        skillsUsed: "Node.js, Prisma, PostgreSQL, TypeScript",
      },
      {
        userId: user2.id,
        title: "Payment Gateway Microservice",
        client: "BankCorp",
        status: "COMPLETED",
        startYear: "2019",
        endYear: "2020",
        details: "Designed and deployed a high-availability payment processing microservice handling 10k TPS.",
        employmentTypeId: employmentTypes[0].id, // Full-Time
        teamSize: "6",
        role: "Tech Lead",
        roleDescription: "Owned architecture decisions, CI/CD pipelines, and AWS infrastructure provisioning.",
        skillsUsed: "Python, AWS, Docker, PostgreSQL, Kafka",
      },
    ],
  });

  console.log("✅ Projects seeded");

  console.log("\n🎉 Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
