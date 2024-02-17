"use client"

import { editAuthor } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { redirect } from 'next/navigation';


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
    <form onSubmit={handleSubmit}>
      <div className=" w-full">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Name" name="authorName" value={authorData.authorName} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Style" name="aboutMe" value={authorData.aboutMe} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" value={authorData.authorInfluence} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" value={authorData.workInfluence} required />
        <select onChange={handleInputChange} className="select select-primary w-full max-w-xs" name="publicProfile" value={authorData.publicProfile} >
          {profileOptions}
        </select>
        <button className="btn btn-primary join-item" type="submit">Edit Author</button>
      </div>
    </form>
  )
}
export default EditAuthorForm;


