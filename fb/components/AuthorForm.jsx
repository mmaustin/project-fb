"use client"

import { createAuthor } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const AuthorForm = ({ authUser }) => {

  const [authorData, setAuthorData] = useState({
    authorName: "",
    aboutMe: "",
    authorInfluence: "",
    workInfluence: "",
    authUser,
    publicProfile: "Public"
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
      const newAuthor = await createAuthor(author);
      if (newAuthor.newAuthorName) {
        toast.success('New Author Created!');
        return newAuthor;
      }
      toast.error(newAuthor.error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(authorData);
    setAuthorData(prevAuthorData => ({
      ...prevAuthorData,
      authorName: "",
      aboutMe: "",
      authorInfluence: "",
      workInfluence: "",
      publicProfile: "Public"
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">

      <p className="capitalize font-bold text-sm sm:text-lg md:text-xl m-4">create your profile</p>

      <div className="w-full sm:w-3/4 flex flex-col items-center border-2 border-base-300 bg-base-300 gap-1 rounded-lg">

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] rounded-tl-lg capitalize focus:outline-none" placeholder="Name (min: 1, max: 40)" name="authorName" value={authorData.authorName} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center rounded-tr-lg font-bold ${authorData.authorName.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{authorData.authorName.length}</span></div>

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Influenced By (min: 1, max: 40)" name="authorInfluence" value={authorData.authorInfluence} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${authorData.authorInfluence.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{authorData.authorInfluence.length}</span></div>

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="A Favorite Work (min: 1, max: 40)" name="workInfluence" value={authorData.workInfluence} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${authorData.workInfluence.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{authorData.workInfluence.length}</span></div>

        <div className="flex flex-row w-full"><textarea onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Tell Us About Yourself (min: 1, max: 250)" name="aboutMe" value={authorData.aboutMe} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${authorData.aboutMe.length >= 251 ? 'bg-error' : 'bg-success/50'}`}>{authorData.aboutMe.length}</span></div>

        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={authorData.authUser} required />

        <select onChange={handleInputChange} className="select  join-item w-full focus:outline-none mb-1" name="publicProfile" value={authorData.publicProfile} >
          {profileOptions}
        </select>

        <button className="w-1/3 btn btn-xs join-item rounded-lg mb-1 border-2 border-success" type="submit">Create Profile</button>

      </div>
    </form>
  )
}
export default AuthorForm;