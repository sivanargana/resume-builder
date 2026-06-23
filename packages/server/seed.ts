import { prisma } from "./client";

 
 

async function main() {
  // Clear database
  await prisma.skill.deleteMany();
  await prisma.education.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  console.log("🗑️ Database cleared");

  const skills = [
    "Angular",
    "React",
    "Vue",
    "Node.js",
    "TypeScript",
    "Docker",
    "Flutter",
    "SQL",
  ];

  const companies = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Amazon",
    "Zoho",
    "Google",
    "Microsoft",
  ];

  for (let i = 1; i <= 8; i++) {
    await prisma.user.create({
      data: {
        email: `user${i}@example.com`,
        password: `password${i}`,

        profile: {
          create: {
            firstName: `User${i}`,
            lastName: `Demo${i}`,
            phone: `98765432${String(i).padStart(2, "0")}`,
            headline: `${skills[i - 1]} Developer`,
            summary: `Experienced ${skills[i - 1]} Developer`,

            skills: {
              create: [
                { name: skills[i - 1] },
                { name: "Git" },
              ],
            },

            education: {
              create: {
                degree: "B.Tech Computer Science",
                institute: `University ${i}`,
              },
            },

            experience: {
              create: {
                company: companies[i - 1],
                designation: "Software Engineer",
              },
            },
          },
        },
      },
    });
  }

  console.log("✅ Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
 
