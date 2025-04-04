'use server';

import DemoAuthor from "@/models/DemoAuthor";
import { connectToDB } from "./database";


export const createDemoAuthor = async () => {

  try {
    await connectToDB();

    const demoAuthor = await DemoAuthor.create({
      authorName: "Demo N. Strate",
      aboutMe: "I'm here to serve you.",
      authorInfluence: "Demo N. Strater",
      workInfluence: "Everybody Loves Demo",
      publicProfile: "Public"
    });

    return { demoAuthorName: demoAuthor.authorName };

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSingleDemoAuthor = async () => {
  try {
    await connectToDB();
    return await DemoAuthor.findOne({ _id: '67f036e8f91cb23f41fbc808' });
  } catch (error) {
    console.log(error);
  }
};