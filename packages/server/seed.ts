import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "./client";

const FIRST_NAMES = [
  "Aarav",
  "Diya",
  "Vihaan",
  "Ananya",
  "Reyansh",
  "Saanvi",
  "Aditya",
  "Aanya",
  "Krishna",
  "Ishaan",
  "Riya",
  "Arjun",
  "Myra",
  "Shaurya",
  "Aditi",
  "Rudra",
  "Pranav",
  "Avni",
  "Atharv",
  "Mira",
];

const LAST_NAMES = [
  "Sharma",
  "Verma",
  "Patel",
  "Gupta",
  "Iyer",
  "Reddy",
  "Nair",
  "Khan",
  "Singh",
  "Kumar",
  "Joshi",
  "Mehta",
  "Bose",
  "Das",
  "Mukherjee",
  "Rao",
  "Pillai",
  "Chatterjee",
  "Banerjee",
  "Menon",
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Singapore",
  "Canada",
];
const LOCATIONS = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Noida",
  "Gurgaon",
];
const AVAILABILITIES = [
  "Immediate",
  "15 days",
  "30 days",
  "60 days",
  "90 days",
];

const WORK_STATUSES = ["Fresher", "Experienced"] as const;
const EMPLOYMENT_TYPES = [
  "fulltime",
  "internship",
  "contract",
  "parttime",
  "freelance",
] as const;
const EDUCATION_TYPES = ["fulltime", "parttime", "distance"] as const;
const SALARY_BREAKDOWNS = ["fixed", "ctc"] as const;
const PROFICIENCIES = ["beginner", "proficient", "expert"] as const;

const SKILL_POOL = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "Kotlin",
  "Swift",
  "Go",
  "Rust",
  "C++",
  "C#",
  ".NET",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "GraphQL",
  "REST",
  "TensorFlow",
  "PyTorch",
  "Figma",
];

const UNIVERSITIES = [
  "IIT Bombay",
  "IIT Delhi",
  "BITS Pilani",
  "Anna University",
  "VIT Vellore",
  "MIT",
  "Stanford University",
  "University of Cambridge",
  "NIT Trichy",
  "Delhi University",
  "Mumbai University",
  "Pune University",
];

const COURSES = [
  "B.Tech",
  "M.Tech",
  "B.E.",
  "M.C.A.",
  "B.Sc",
  "M.Sc",
  "MBA",
  "B.Com",
];
const EDUCATION_LABELS = [
  "10th",
  "12th",
  "Graduation",
  "Post Graduation",
  "Diploma",
];
const GRADE_SYSTEMS = ["CGPA", "Percentage", "Scale of 10"];

const PROJECT_TYPES = [
  "Web App",
  "Mobile App",
  "API",
  "CLI Tool",
  "Library",
  "Dashboard",
];
const PROJECT_STATUSES = ["Completed", "In Progress", "On Hold"];

const LANGUAGES = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Bengali",
  "Marathi",
  "French",
  "German",
  "Spanish",
];

const COMPANIES = [
  "Infosys",
  "TCS",
  "Wipro",
  "HCL",
  "Tech Mahindra",
  "Accenture",
  "Google",
  "Microsoft",
  "Amazon",
  "Flipkart",
  "Razorpay",
  "Paytm",
];
const JOB_TITLES = [
  "Software Engineer",
  "Senior Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Mobile Developer",
  "QA Engineer",
  "Tech Lead",
];
const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Data",
  "Infrastructure",
  "Design",
];

const HEADLINES = [
  "Full Stack Developer | React & Node.js",
  "Senior Software Engineer | Cloud & Distributed Systems",
  "Data Scientist | Machine Learning Enthusiast",
  "Frontend Specialist | React, TypeScript, Tailwind",
  "Backend Engineer | Java, Spring Boot, PostgreSQL",
];

const SUMMARIES = [
  "Passionate engineer with a track record of shipping reliable, well-tested software in fast-paced teams.",
  "Full-stack developer focused on building delightful user experiences backed by scalable APIs.",
  "Hands-on engineer who enjoys owning features end-to-end — from design to deployment and observability.",
  "Builder of pragmatic, maintainable systems; advocate for clean code and strong engineering culture.",
];

function pick<T>(arr: readonly T[], i: number): T {
  return arr[i % arr.length]!;
}

function randInt(min: number, max: number, seed: number): number {
  return min + (seed % (max - min + 1));
}

function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

async function clean() {
  // Order matters: delete dependents first.
  await prisma.experienceSkill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();
  await prisma.language.deleteMany();
  await prisma.profileSummary.deleteMany();
  await prisma.headline.deleteMany();
  await prisma.basicDetails.deleteMany();
  await prisma.user.deleteMany();
}

async function main() {
  console.log("Cleaning existing data...");
  await clean();

  console.log("Seeding 20 users with full profiles...");

  const TOTAL_USERS = 20;
  const DEFAULT_PASSWORD = "password123";
  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  for (let i = 0; i < TOTAL_USERS; i++) {
    const firstName = pick(FIRST_NAMES, i);
    const lastName = pick(LAST_NAMES, i + 3);
    const fullName = `${firstName} ${lastName}`;
    const workStatus = pick(WORK_STATUSES, i);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i + 1}@example.com`;
    const mobile = `9${String(100000000 + i).padStart(9, "0")}`;

    const user = await prisma.user.create({
      data: {
        fullName,
        mobile,
        email,
        password: hashedPassword,
        workStatus,
        basicDetails: {
          create: {
            experienceYears: randInt(0, 15, i),
            experienceMonths: randInt(0, 11, i + 1),
            salaryAmount: randInt(300000, 4000000, i + 2),
            salaryBreakdown: pick(SALARY_BREAKDOWNS, i),
            country: pick(COUNTRIES, i),
            location: pick(LOCATIONS, i),
            availability: pick(AVAILABILITIES, i),
          },
        },
        headline: {
          create: {
            value: pick(HEADLINES, i),
          },
        },
        profileSummary: {
          create: {
            summary: pick(SUMMARIES, i),
          },
        },
      },
    });

    // 20 skills per user (unique per user)
    for (let s = 0; s < 20; s++) {
      const name = `${pick(SKILL_POOL, s + i)}-${s}`;
      await prisma.skill.create({
        data: {
          name,
          userId: user.id,
        },
      });
    }

    // 20 experiences per user
    for (let e = 0; e < 20; e++) {
      const joining = daysAgo(randInt(365, 365 * 10, i + e));
      const workedTill =
        e === 0 ? null : daysAgo(randInt(30, 365 * 3, i + e + 1));
      const experience = await prisma.experience.create({
        data: {
          isCurrentEmployment: e === 0,
          employmentType: pick(EMPLOYMENT_TYPES, e + i),
          companyName: pick(COMPANIES, e + i),
          jobTitle: pick(JOB_TITLES, e + i),
          department: pick(DEPARTMENTS, e + i),
          location: pick(LOCATIONS, e + i + 1),
          joiningDate: joining,
          workedTill,
          monthlyStipend: e === 0 ? null : randInt(10000, 80000, i + e),
          currentSalary: e === 0 ? randInt(300000, 4000000, i + e) : null,
          totalExperience: randInt(6, 120, i + e),
          jobProfile: pick(SUMMARIES, e + i),
          noticePeriod: e === 0 ? "30 days" : null,
          userId: user.id,
        },
      });

      // A handful of skills per experience (3 each → contributes to volume)
      for (let es = 0; es < 3; es++) {
        await prisma.experienceSkill.create({
          data: {
            experienceId: experience.id,
            name: pick(SKILL_POOL, es + i + e),
          },
        });
      }
    }

    // 20 educations per user
    for (let ed = 0; ed < 20; ed++) {
      await prisma.education.create({
        data: {
          education: pick(EDUCATION_LABELS, ed + i),
          university: pick(UNIVERSITIES, ed + i),
          course: pick(COURSES, ed + i),
          specialization:
            ed % 2 === 0
              ? pick(
                  [
                    "Computer Science",
                    "Information Technology",
                    "Electronics",
                    "Mechanical",
                  ],
                  ed + i,
                )
              : null,
          type: pick(EDUCATION_TYPES, ed + i),
          startYear: 2000 + ed,
          endYear: 2004 + ed,
          gradeSystem: pick(GRADE_SYSTEMS, ed + i),
          marks: String(7 + ((ed + i) % 3) + "." + ((ed + i) % 10)),
          userId: user.id,
        },
      });
    }

    // 20 projects per user
    for (let p = 0; p < 20; p++) {
      await prisma.project.create({
        data: {
          title: `${pick(JOB_TITLES, p + i)} Project ${p + 1}`,
          client: pick(COMPANIES, p + i + 2),
          status: pick(PROJECT_STATUSES, p + i),
          startYear: 2018 + (p % 8),
          endYear: 2019 + (p % 8),
          details: pick(SUMMARIES, p + i),
          location: pick(LOCATIONS, p + i),
          site: "https://example.com",
          type: pick(PROJECT_TYPES, p + i),
          teamSize: randInt(1, 12, p + i),
          role: pick(JOB_TITLES, p + i),
          roleDescription: pick(SUMMARIES, p + i),
          skillsUsed: [
            pick(SKILL_POOL, p + i),
            pick(SKILL_POOL, p + i + 1),
            pick(SKILL_POOL, p + i + 2),
          ].join(", "),
          userId: user.id,
        },
      });
    }

    // 20 languages per user (unique per user)
    for (let l = 0; l < 20; l++) {
      await prisma.language.create({
        data: {
          name: `${pick(LANGUAGES, l + i)}-${l}`,
          proficiency: pick(PROFICIENCIES, l + i),
          read: (l + i) % 2 === 0,
          write: (l + i) % 3 === 0,
          speak: (l + i) % 4 === 0,
          userId: user.id,
        },
      });
    }

    console.log(`  [${i + 1}/${TOTAL_USERS}] seeded ${fullName}`);
  }

  const counts = {
    users: await prisma.user.count(),
    basicDetails: await prisma.basicDetails.count(),
    headlines: await prisma.headline.count(),
    summaries: await prisma.profileSummary.count(),
    skills: await prisma.skill.count(),
    experiences: await prisma.experience.count(),
    experienceSkills: await prisma.experienceSkill.count(),
    educations: await prisma.education.count(),
    projects: await prisma.project.count(),
    languages: await prisma.language.count(),
  };

  console.log("Done. Row counts:");
  console.log(counts);
  console.log(
    `\nAll seeded users can log in with password: ${DEFAULT_PASSWORD}`,
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
