import Baby from "@/models/baby";


export const getBabies = async () => {
  return await Baby.find({});
};