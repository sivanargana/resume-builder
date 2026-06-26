import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "./client";

async function main() {}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
