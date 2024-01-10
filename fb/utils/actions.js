'use server'

import Contestant from "@/models/Contestant";
import Author from "@/models/Author";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";


export const getContestants = async () => {

  return await Contestant.find();
};

export const createAuthor = async (prevState, formData) => {
  //formData.delete('name');
  if (!formData.get('name')) console.log('there is no name');
  const name = formData.get('name')
  const style = formData.get('style');
  const authorInfluence = formData.get('authorInfluence');
  const workInfluence = formData.get('workInfluence');

  console.log(name, style, authorInfluence, workInfluence);

  return { message: 'success' };
  // try {
  //   await connectToDB();

  // } catch (error) {

  // }
};


// export const createTaskCustom = async (prevState, formData) => {
//   const content = formData.get('content');
//   const Task = z.object({
//     content: z.string().min(5),
//   })
//   try {
//     Task.parse({ content });
//     await prisma.task.create({
//       data: {
//         content,
//       }
//     });
//     revalidatePath('/tasks');
//     return { message: 'success' };
//   } catch (error) {
//     return { message: 'error' };
//   };
// };