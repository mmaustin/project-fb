'use server'

//import Contestant from "@/models/Contestant";
import Author from "@/models/Author";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";
import Work from "@/models/Work";
import Note from "@/models/Note";
import { redirect } from "next/navigation";




export const getAuthors = async () => {
  try {
    await connectToDB();
    return await Author.find();
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


export const createAuthor = async ({ authorName, aboutMe, authorInfluence, workInfluence, authUser, publicProfile }) => {
  // console.log(authorName, aboutMe, authorInfluence, workInfluence, authUser, publicProfile);
  // return null;

  try {
    await connectToDB();
    const author = await Author.create({
      authorName, aboutMe, authorInfluence, workInfluence, authUser, publicProfile
    })

    revalidatePath('authors');
    return { newAuthorName: author.authorName };
  } catch (error) {
    return null;
  }
};

export const editAuthor = async ({ authorId, authorName, aboutMe, authorInfluence, workInfluence, publicProfile }) => {
  // console.log(authorName, aboutMe, authorInfluence, workInfluence, authUser, publicProfile);
  // return null;


  try {
    await connectToDB();
    const author = await Author.findById(authorId);
    author.authorName = authorName;
    author.aboutMe = aboutMe;
    author.authorInfluence = authorInfluence;
    author.workInfluence = workInfluence;
    author.publicProfile = publicProfile;

    await author.save();

    return { authorName: author.name };
  } catch (error) {
    return null;
  }
};

export const editWork = async ({ workId, workTitle, workGenre, workSynopsis, workWritingStage }) => {
  // console.log(workId, workTitle, workGenre, workSynopsis, workWritingStage);
  // return null;
  try {
    await connectToDB();
    const work = await Work.findById(workId);
    work.title = workTitle;
    work.genre = workGenre;
    work.synopsis = workSynopsis;
    work.workWritingStage;

    await work.save();

    return { editWorkTitle: work.title };
  } catch (error) {
    return null;
  }
};

export const createWork = async ({ title, genre, synopsis, authUser, authorName, writingStage, createdBy }) => {
  //console.log(title, genre, synopsis, authUser, authorName, writingState, createdBy);

  try {
    await connectToDB();
    const work = await Work.create({
      title, genre, synopsis, authUser, authorName, writingStage, createdBy
    })

    revalidatePath(`authors/${createdBy}`);
    return { newWorkTitle: work.title };
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
  //console.log(content, category, createdBy, authUser, authorName, authorId);
  // return null;

  try {
    await connectToDB();
    const note = await Note.create({
      content, category, createdBy, authUser, authorName, authorId
    })

    revalidatePath(`works/${createdBy}`);
    return { newNoteCategory: note.category };
  } catch (error) {
    return null;
  }
}

export const getWorkNotes = async (workId) => {
  try {
    await connectToDB();
    return await Note.find({ createdBy: workId });
  } catch (error) {
    console.log(error);
  }
};

export const noteDelete = async (noteId, workID) => {
  //console.log(noteId, workID);
  //redirect('/authors');
  try {
    await connectToDB();
    await Note.findByIdAndDelete(noteId)
    revalidatePath(`works/${workID}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteWork = async (workId) => {
  try {
    await connectToDB();
    await Note.deleteMany({ createdBy: workId });
    await Work.findByIdAndDelete(workId);
    redirect('/authors');
  } catch (error) {
    console.log(error);
  }
};