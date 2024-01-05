import Contestant from "@/models/Contestant";

export const getContestants = async () => {
  return await Contestant.find();
};