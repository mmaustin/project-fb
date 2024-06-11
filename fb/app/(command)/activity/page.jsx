import { getAuthorNotes, getAuthorWithAuth, getAuthorsWorks } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import React from "react";


const AuthorActivityPage = async () => {

  const { userId } = auth();
  let author = await getAuthorWithAuth(userId);
  let authorWorks = await getAuthorsWorks(author._id);
  let authorNotes = await getAuthorNotes(author.authorName);
  let authorAssets = [...authorWorks, ...authorNotes];

  // let dateGrid = new Array(10).fill('ok')
  // console.log(dateGrid);

  const allAuthorAssets = authorAssets.map((asset, i) => {
    if (asset.title) {
      return (
        <h3 key={i}>{new Date(asset.createdAt).toDateString()}</h3>
      );
    } else {
      return (
        <p key={i}>{asset.content}</p>
      );
    };
  });

  return (
    <div className=" w-full ">
      {/* <p>Author Activity Page</p> */}
      <div className=" ">{allAuthorAssets}</div>
    </div>

  )
};
export default AuthorActivityPage;