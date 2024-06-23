import prisma from "../config/myprisma";

export default async function getRandom(){
    const data = await prisma.$queryRaw`SELECT * FROM "khodam" ORDER BY RANDOM() LIMIT 1;`;
    await prisma.$disconnect();
    return data;
}