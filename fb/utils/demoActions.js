'use server';

import DemoAuthor from "@/models/DemoAuthor";
import { connectToDB } from "./database";
import DemoWork from "@/models/DemoWork";


// export const createDemoAuthor = async () => {

//   try {
//     await connectToDB();

//     const demoAuthor = await DemoAuthor.create({
//       authorName: "Demo N. Strate",
//       aboutMe: "I'm here to serve you.",
//       authorInfluence: "Demo N. Strater",
//       workInfluence: "Everybody Loves Demo",
//       publicProfile: "Public"
//     });

//     return { demoAuthorName: demoAuthor.authorName };

//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

export const getSingleDemoAuthor = async () => {
  try {
    await connectToDB();
    return await DemoAuthor.findOne({ _id: '67f036e8f91cb23f41fbc808' });
  } catch (error) {
    console.log(error);
  }
};

export const createDemoWork = async ({ title, genre, synopsis, authorName, writingStage, createdBy }) => {
  const ZodWork = z.object({
    title: z.string().min(1).max(40),
    genre: z.string().min(1).max(30),
    synopsis: z.string().min(1).max(250),
  });

  try {
    await connectToDB();

    ZodWork.parse({ title, genre, synopsis });

    const work = await DemoWork.create({
      title, genre, synopsis, authorName, writingStage, createdBy
    });

    revalidatePath(`demo-authors`);
    return { newWorkTitle: work.title };
  } catch (error) {
    return null;
  }
};