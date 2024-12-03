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
      <p className="capitalize m-4 font-bold text-lg">edit profile</p>
      <div className="w-full sm:w-3/4 flex flex-col items-center">
        <input onChange={handleInputChange} type="text" className="input join-item w-full rounded-lg capitalize input-bordered mb-1" placeholder="Name (min: 1, max: 40)" name="authorName" value={authorData.authorName} required />
        <textarea onChange={handleInputChange} type="textarea" className="textarea input input-bordered mb-1 join-item w-full rounded-lg capitalize" placeholder="Tell Us About Yourself (min: 25, max: 250)" name="aboutMe" value={authorData.aboutMe} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered mb-1 join-item w-full rounded-lg capitalize" placeholder="Influenced By (min: 1, max: 40)" name="authorInfluence" value={authorData.authorInfluence} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered mb-1 join-item w-full rounded-lg capitalize" placeholder="A Favorite Work (min: 1, max: 40)" name="workInfluence" value={authorData.workInfluence} required />
        <select onChange={handleInputChange} className="input input-bordered mb-1 join-item w-full rounded-lg" name="publicProfile" value={authorData.publicProfile} >
          {profileOptions}
        </select>
        <div className="flex justify-center">
          <button className="btn btn-accent btn-xs join-item rounded-lg mr-2" type="submit">Edit</button>
          {/* <Link href={`/authors/${aId}`} className="w-1/3 btn btn-accent btn-xs rounded-lg">Author Hub</Link> */}
        </div>
      </div>
    </form>
  )
}
export default EditAuthorForm;


