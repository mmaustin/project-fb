'use server'

import Author from "@/models/Author";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";
import Work from "@/models/Work";
import Note from "@/models/Note";
import { redirect } from "next/navigation";
import { z } from "zod";
import dayjs from "dayjs";

export const getAuthors = async () => {
  try {
    await connectToDB();
    return await Author.find();
  } catch (error) {
    console.log(error);
  }
};

export const authUserCheck = async (userId) => {
  try {
    await connectToDB();
    return await Author.find({ authUser: userId });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleAuthor = async (authorId) => {
  try {
    await connectToDB();
    return await Author.findOne({ _id: authorId });
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorWithAuth = async (authId) => {
  try {
    await connectToDB();
    return await Author.findOne({ authUser: authId });
  } catch (error) {
    console.log(error);
  }
};

export const createAuthor = async ({ authorName, aboutMe, authorInfluence, workInfluence, authUser, publicProfile }) => {

  const ZodAuthor = z.object({
    authorName: z.string().min(1).max(40),
    aboutMe: z.string().min(1).max(250),
    authorInfluence: z.string().min(1).max(40),
    workInfluence: z.string().min(1).max(40),
  });
  try {
    await connectToDB();

    ZodAuthor.parse({ authorName, aboutMe, authorInfluence, workInfluence });

    const author = await Author.create({
      authorName, aboutMe, authorInfluence, workInfluence, authUser, publicProfile
    })

    revalidatePath('authors');
    return { newAuthorName: author.authorName };
  } catch (error) {
    console.log(error);
    return { error: error.issues[0].message };
  }
};

export const editAuthor = async ({ authorId, authorName, aboutMe, authorInfluence, workInfluence, publicProfile }) => {

  const ZodAuthor = z.object({
    authorName: z.string().min(1).max(40),
    aboutMe: z.string().min(1).max(250),
    authorInfluence: z.string().min(1).max(40),
    workInfluence: z.string().min(1).max(40),
  });

  try {
    await connectToDB();

    ZodAuthor.parse({ authorName, aboutMe, authorInfluence, workInfluence });

    const author = await Author.findById(authorId);
    author.authorName = authorName;
    author.aboutMe = aboutMe;
    author.authorInfluence = authorInfluence;
    author.workInfluence = workInfluence;
    author.publicProfile = publicProfile;

    await author.save();

    revalidatePath(`authors/edit/${authorId}`);
    return { authorName: author.name };
  } catch (error) {
    return null;
  }
};

export const createWork = async ({ title, genre, synopsis, authUser, authorName, writingStage, createdBy }) => {
  const ZodWork = z.object({
    title: z.string().min(1).max(40),
    genre: z.string().min(1).max(30),
    synopsis: z.string().min(10).max(250),
  });
  console.log(title, genre, synopsis, authorName, writingStage, createdBy);

  try {
    await connectToDB();

    ZodWork.parse({ title, genre, synopsis });

    const work = await Work.create({
      title, genre, synopsis, authUser, authorName, writingStage, createdBy
    })

    revalidatePath(`authors/${createdBy}`);
    return { newWorkTitle: work.title };
  } catch (error) {
    return null;
  }
};

export const editWork = async ({ workId, workTitle, workGenre, workSynopsis, workWritingStage }) => {
  const ZodWork = z.object({
    workTitle: z.string().min(1).max(40),
    workGenre: z.string().min(1).max(30),
    workSynopsis: z.string().min(10).max(250),
  });

  try {
    await connectToDB();
    ZodWork.parse({ workTitle, workGenre, workSynopsis });

    const work = await Work.findById(workId);

    work.title = workTitle;
    work.genre = workGenre;
    work.synopsis = workSynopsis;
    work.writingStage = workWritingStage;

    await work.save();

    revalidatePath(`works/edit/${workId}`);
    return { editWorkTitle: work.title };
  } catch (error) {
    return null;
  }
};


export const getSingleWork = async (workId) => {
  try {
    await connectToDB();
    return await Work.findOne({ _id: workId });
  } catch (error) {
    console.log(error);
  }
};

export const getAllWorks = async () => {
  try {
    await connectToDB();
    return await Work.find();
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorsWorks = async (authorId) => {
  try {
    await connectToDB();
    return await Work.find({ createdBy: authorId });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = async ({ content, category, createdBy, authUser, authorName, authorId }) => {
  const ZodNote = z.object({
    content: z.string().min(1).max(100)
  });

  try {
    await connectToDB();

    ZodNote.parse({ content });

    const note = await Note.create({
      content, category, createdBy, authUser, authorName, authorId
    });

    revalidatePath(`works/${createdBy}`);
    return { newNoteCategory: note.category };
  } catch (error) {
    return null;
  }
};

export const getWorkNotes = async (workId) => {
  try {
    await connectToDB();
    return await Note.find({ createdBy: workId });
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorNotes = async (authorsUserId) => {
  try {
    await connectToDB();
    const notes = await Note.find({ authUser: authorsUserId });

    return notes
  } catch (error) {
    console.log(error);
  }
};

export const noteDelete = async (noteId, workID) => {
  try {
    await connectToDB();
    await Note.findByIdAndDelete(noteId)
    revalidatePath(`works/${workID}`);
  } catch (error) {
    console.log(error);
  }
};

export const workDelete = async (workId) => {
  try {
    await connectToDB();
    await Note.deleteMany({ createdBy: workId });
    await Work.findByIdAndDelete(workId);
  } catch (error) {
    console.log(error);
  } finally {
    redirect('/authors');
  };
};

export const authorDelete = async (authorId) => {
  try {
    await connectToDB();
    await Note.deleteMany({ authorId: authorId });
    await Work.deleteMany({ createdBy: authorId });
    await Author.findByIdAndDelete(authorId);
  } catch (error) {
    console.log(error);
  } finally {
    redirect('/authors');
  };
};

export const getChartStats = async (userId) => {

  const sixMonthsAgo = dayjs().subtract(6, 'month').toDate();

  try {
    await connectToDB();

    const notes = await Note.find({ createdAt: { $gte: sixMonthsAgo }, clerkId: userId }).sort({ createdAt: 'desc' });

    const monthlyNotes = notes.reduce((acc, job) => {
      const date = dayjs(job.createdAt).format('MMM YY');

      const existingEntry = acc.find((entry) => entry.date === date);

      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        acc.push({ date, count: 1 });
      }

      return acc;
    }, []);

    return monthlyNotes

  } catch (error) {
    redirect('/authors');
  };
};