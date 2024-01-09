'use server'

import Contestant from "@/models/Contestant";
import Author from "@/models/Author";
import { connectToDB } from "./database";

export const getContestants = async () => {

  return await Contestant.find();
};

export const createAuthor = async (formData) => {
  console.log(formData);
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