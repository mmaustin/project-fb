'use server';

import DemoAuthor from "@/models/DemoAuthor";
import { connectToDB } from "./database";
import DemoWork from "@/models/DemoWork";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dayjs from "dayjs";
import DemoNote from "@/models/DemoNote";

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
    synopsis: z.string().min(10).max(250),
  });

  try {
    await connectToDB();

    ZodWork.parse({ title, genre, synopsis });

    const work = await DemoWork.create({
      title, genre, synopsis, authorName, writingStage, createdBy
    });
    revalidatePath(`/demo-authors`);
    return { newWorkTitle: work.title };
  } catch (error) {
    console.log(error);
  }
};

export const getDemoWorks = async () => {
  try {
    await connectToDB();
    return await DemoWork.find();
  } catch (error) {
    console.log(error);
  }
};

export const getDemoWork = async (workId) => {
  try {
    await connectToDB();
    return await DemoWork.findOne({ _id: workId })
  } catch (error) {
    console.log(error);

  }
};

export const demoWorkDelete = async (workId) => {
  try {
    await connectToDB();
    await DemoNote.deleteMany({ createdBy: workId });
    await DemoWork.findByIdAndDelete(workId);
  } catch (error) {
    console.log(error);
  } finally {
    redirect('/demo-authors');
  }
};

export const demoNoteDelete = async (noteId, workID) => {

  try {
    await connectToDB();
    await DemoNote.findByIdAndDelete(noteId);
    revalidatePath(`demo-works/${workID}`)
  } catch (error) {

  }

}

export const getDemoChartStats = async () => {

  const twoMonthsAgo = dayjs().subtract(2, 'month').toDate();

  try {
    await connectToDB();

    const notes = await DemoNote.find({ createdAt: { $gte: twoMonthsAgo } }).sort({ createdAt: 'desc' });

    const monthlyNotes = notes.reduce((acc, note) => {
      const date = dayjs(note.createdAt).format('MMM YY');

      const existingEntry = acc.find((entry) => entry.date === date);

      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        acc.push({ date, count: 1 });
      }

      return acc;
    }, []);

    return monthlyNotes;

  } catch (error) {
    redirect('/authors');
  };
};


export const createDemoNote = async ({ content, category, createdBy, authorName, authorId }) => {
  const ZodNote = z.object({
    content: z.string().min(1).max(100)
  });

  try {
    await connectToDB();

    ZodNote.parse({ content });

    const note = await DemoNote.create({
      content, category, createdBy, authorName, authorId
    });

    revalidatePath(`demo-works/${createdBy}`);
    return { newNoteCategory: note.category };
  } catch (error) {
    return null;
  }
};

export const getDemoWorkNotes = async (workId) => {
  try {
    await connectToDB();
    return await DemoNote.find({ createdBy: workId });
  } catch (error) {
    console.log(error);
  }
};