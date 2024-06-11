import { getAuthorNotes, getAuthorWithAuth, getAuthorsWorks } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import React from "react";


const AuthorActivityPage = async () => {

  const { userId } = auth();
  let author = await getAuthorWithAuth(userId);
  let authorWorks = await getAuthorsWorks(author._id);
  let authorNotes = await getAuthorNotes(author.authorName);
  let allAuthorAssets = [...authorWorks, ...authorNotes];

  let dateGrid = new Array(10).fill('ok')
  console.log(dateGrid);

  return (
    <div className=" w-full ">
      {/* <p>Author Activity Page</p> */}
      <div className=" ">{dateGrid}</div>
    </div>

  )
};
export default AuthorActivityPage;