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

    revalidatePath('authors');
    return { message: 'success' };
  } catch (error) {
    return { message: 'error' };
  }
};

export const createWork = async (array, prevState, formData) => {

  const title = formData.get('title')
  const genre = formData.get('genre');
  const synopsis = formData.get('synopsis');
  const wordCount = formData.get('wordCount');
  const createdBy = array[0];

  try {
    console.log(array);
    await connectToDB();
    await Work.create({
      title, genre, synopsis, wordCount, createdBy
    })

    revalidatePath(`/authors/${createdBy}`);
    //console.log(title, genre, synopsis, wordCount, createdBy);
    return { message: 'success' };
  } catch (error) {
    return { message: 'error' };
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


