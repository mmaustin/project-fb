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

  // const na = allNotes.map((note, i) => {
  //   <div key={note._id} className="collapse collapse-arrow bg-base-200">
  //     <input type="radio" name="notes-accordian" defaultChecked />
  //     <div className="collapse-title text-xl font-medium">
  //       {note.category}
  //     </div>
  //     <div className="collapse-content">
  //       {note.content}
  //     </div>
  //   </div>
  // })

  return (
    <div className=" h-[200px] border border-r-green">
      {
        allNotes.map((note, i) => {
          return <div key={note._id} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="notes-accordian" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {note.category}
            </div>
            <div className="collapse-content">
              {note.content}
            </div>
          </div>
        })
      }
    </div>
  );
};
export default AuthorActivityPage;