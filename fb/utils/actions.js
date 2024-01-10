'use server'

//import Contestant from "@/models/Contestant";
import Author from "@/models/Author";
import { connectToDB } from "./database";
import { revalidatePath } from "next/cache";


export const getAuthors = async () => {
  await connectToDB();
  return await Author.find();
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

