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
      <p className="capitalize font-bold text-sm sm:text-lg md:text-xl text-blue m-4">create author profile</p>
      <div className="w-full sm:w-3/4 flex flex-col items-center">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full rounded-lg capitalize" placeholder="Name (min: 1, max: 40)" name="authorName" value={authorData.authorName} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full rounded-lg capitalize" placeholder="Influenced By (min: 1, max: 40)" name="authorInfluence" value={authorData.authorInfluence} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full rounded-lg capitalize" placeholder="A Favorite Work (min: 1, max: 40)" name="workInfluence" value={authorData.workInfluence} required />
        <textarea onChange={handleInputChange} type="textarea" className="textarea input input-bordered join-item w-full rounded-lg capitalize" placeholder="Tell Us About Yourself (min: 25, max: 250)" name="aboutMe" value={authorData.aboutMe} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={authorData.authUser} required />
        <select onChange={handleInputChange} className="select select-primary join-item w-full rounded-lg" name="publicProfile" value={authorData.publicProfile} >
          {profileOptions}
        </select>
        <button className="w-1/3 btn btn-accent btn-xs join-item rounded-lg" type="submit">Create Author</button>

      </div>
    </form>
  )
}
export default AuthorForm;