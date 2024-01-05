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
}