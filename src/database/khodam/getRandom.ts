import prisma from "../config/myprisma";

export default async function getRandom() {
    const data = await prisma.khodam.findMany();
    const randomIndex = Math.floor(Math.random() * data.length);
    await prisma.$disconnect;
    return data[randomIndex];
}