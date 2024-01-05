import Baby from "@/models/babies";


export const getBabies = async () => {
  return await Baby.find({});
};