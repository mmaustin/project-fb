'use server'

import Contestant from "@/models/Contestant";
import Author from "@/models/Author";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";


export const getContestants = async () => {

  return await Contestant.find();
};

export const createAuthor = async (prevState, formData) => {

  const name = formData.get('name')
  const style = formData.get('style');
  const authorInfluence = formData.get('authorInfluence');
  const workInfluence = formData.get('workInfluence');

  try {
    await connectToDB();
    await Author.create({
      name, style, authorInfluence, workInfluence
    })

    return { message: 'success' };
  } catch (error) {
    return { message: 'error' };
  }
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