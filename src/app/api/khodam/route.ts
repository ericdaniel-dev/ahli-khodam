import getRandom from "@/database/khodam/getRandom";

export async function GET(){
    const data = await getRandom();
    return Response.json(data);
}