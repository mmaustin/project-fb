"use client"

import { editAuthor } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";


const EditAuthorForm = ({ author }) => {

  const { aId, aAuthorName, aAboutMe, aAuthorInfluence, aWorkInfluence, aAuthUser, aPublicProfile } = author;

  const [authorData, setAuthorData] = useState({
    authorName: aAuthorName,
    aboutMe: aAboutMe,
    authorInfluence: aAuthorInfluence,
    workInfluence: aWorkInfluence,
    authUser: aAuthUser,
    publicProfile: aPublicProfile,
    authorId: aId,
  });

  const profileOptions = ['Public', 'Private'].map((opt, i) => {
    return (
      <option key={`${opt}: ${i}`} value={opt}>{opt}</option>
    )
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prevAuthorData) => ({
      ...prevAuthorData,
      [name]: value,
    }));
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: async (author) => {
      const updatedAuthor = await editAuthor(author);
      if (updatedAuthor) {

        toast.success('Author Updated');
        return updatedAuthor;
      }
      toast.error('Something went wrong. Try updating again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(authorData);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">

      <p className="capitalize m-4 font-serif text-lg">edit profile</p>

      <div className="w-full sm:w-3/4 flex flex-col items-center border-4 border-base-300 bg-base-300 gap-1 rounded-lg">

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] rounded-tl-lg capitalize focus:outline-none" placeholder="Name (min: 1, max: 40)" name="authorName" value={authorData.authorName} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center rounded-tr-lg font-bold ${authorData.authorName.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{authorData.authorName.length}</span></div>

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Influenced By (min: 1, max: 40)" name="authorInfluence" value={authorData.authorInfluence} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${authorData.authorInfluence.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{authorData.authorInfluence.length}</span></div>

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="A Favorite Work (min: 1, max: 40)" name="workInfluence" value={authorData.workInfluence} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${authorData.workInfluence.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{authorData.workInfluence.length}</span></div>

        <div className="flex flex-row w-full"><textarea onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Tell Us About Yourself (min: 1, max: 250)" name="aboutMe" value={authorData.aboutMe} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${authorData.aboutMe.length >= 251 ? 'bg-error' : 'bg-success/50'}`}>{authorData.aboutMe.length}</span></div>

        <select onChange={handleInputChange} className="input mb-1 join-item w-full focus:outline-none" name="publicProfile" value={authorData.publicProfile} >
          {profileOptions}
        </select>

        <div className="flex justify-center">
          <button className="w-auto btn btn-xs border-2 border-success join-item rounded-lg mb-1" type="submit">Edit Profile</button>
        </div>
      </div>
    </form>
  )
}
export default EditAuthorForm;


