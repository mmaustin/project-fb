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

// export const createAuthor = async (prevState, formData) => {

//   const name = formData.get('name')
//   const style = formData.get('style');
//   const authorInfluence = formData.get('authorInfluence');
//   const workInfluence = formData.get('workInfluence');

//   try {
//     await connectToDB();
//     await Author.create({
//       name, style, authorInfluence, workInfluence
//     })

//     revalidatePath('authors');
//     return { message: 'success' };
//   } catch (error) {
//     return { message: 'error' };
//   }
// };

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

export const editAuthor = async ({ name, style, authorInfluence, workInfluence, authorId }) => {

  try {
    await connectToDB();
    const author = await Author.findById(authorId);
    author.name = name;
    author.style = style;
    author.authorInfluence = authorInfluence;
    author.workInfluence = workInfluence;

    await author.save();

    return { authorName: author.name };
  } catch (error) {
    return null;
  }
};

export const createWork = async ({ name, style, authorInfluence, workInfluence }) => {
  // console.log(name, style, authorInfluence, workInfluence);
  // return null;

  // const title = formData.get('title')
  // const genre = formData.get('genre');
  // const synopsis = formData.get('synopsis');
  // const wordCount = formData.get('wordCount');
  // const createdBy = authorId;

  //console.log(authorId, title, genre, synopsis, wordCount);
  // console.log(authorId, prevState, title, genre, synopsis, wordCount);
  // return { number: 0 }
  //return wordCount;

  // try {
  //   //console.log(array);
  //   await connectToDB();
  //   await Work.create({
  //     title, genre, synopsis, wordCount, createdBy
  //   })

  //   //argsArray[1]?.current.reset();
  //   revalidatePath(`/authors/${createdBy}`);
  //   //formData.delete('title');
  //   //console.log(title, genre, synopsis, wordCount, createdBy);
  //   return //{ message: 'success' };
  // } catch (error) {
  //   console.log(error);
  //   return //{ message: 'error' };
  // }
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


