import Contestant from "@/models/Contestant";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {

    await connectToDB();
    let contestants = await Contestant.find();

    return new Response(JSON.stringify(contestants), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch contestants', { status: 500 });
  }
};

export const POST = async (request) => {
  const { name } = await request.json();
  try {
    await connectToDB();
    const newContestant = new Contestant({
      name
    })
    await newContestant.save();

    return Response.json({ newContestant }, { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new contestant', { status: 500 })
  }
}