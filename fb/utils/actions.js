'use server'

//import Contestant from "@/models/Contestant";
import Author from "@/models/Author";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";
import Work from "@/models/Work";


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

export const editWork = async ({ workId, workTitle, workGenre, workSynopsis, workAuthorName, workAuthUser, workWritingStage, workCreatedBy }) => {
  console.log(workId, workTitle, workGenre, workSynopsis, workAuthorName, workAuthUser, workWritingStage, workCreatedBy);
  return null;
};

export const createWork = async ({ title, genre, synopsis, authUser, authorName, writingState, createdBy }) => {
  //console.log(title, genre, synopsis, authUser, authorName, writingState, createdBy);

  try {
    await connectToDB();
    const work = await Work.create({
      title, genre, synopsis, authUser, authorName, writingState, createdBy
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


