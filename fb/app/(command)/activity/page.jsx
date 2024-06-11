import { getAuthorNotes, getAuthorWithAuth, getAuthorsWorks } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import React from "react";


const AuthorActivityPage = async () => {

  const { userId } = auth();
  let author = await getAuthorWithAuth(userId);
  let authorWorks = await getAuthorsWorks(author._id);
  let authorNotes = await getAuthorNotes(author.authorName);
  let authorAssets = [...authorWorks, ...authorNotes];

  let allWorks = [];
  let allNotes = [];

  authorAssets.map(asset => {
    if (asset.title) {
      allWorks.push(asset);
    } else {
      allNotes.push(asset);
    };
  });

  return (
    <div className=" w-full ">
      {/* <p>Author Activity Page</p> */}
      {/* <div className=" ">{allAuthorAssets}</div> */}
    </div>

  )
};
export default AuthorActivityPage;