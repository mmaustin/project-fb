"use client"

import { editAuthor } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { redirect } from 'next/navigation';


const EditAuthorForm = ({ author }) => {
  // console.log(author);
  //const authorId = author.aId;

  // const [name, setName] = useState(author.aName);
  // const [style, setStyle] = useState(author.aStyle);
  // const [authorInfluence, setAuthorInfluence] = useState(author.aAuthorInfluence);
  // const [workInfluence, setWorkInfluence] = useState(author.aWorkInfluence);
  // const [authorId, setAuthorId] = useState(author.aId);

  const { aAuthorName, aAboutMe, aAuthorInfluence, aWorkInfluence, aAuthUser, aPublicProfile } = author;

  const [authorData, setAuthorData] = useState({
    authorName: aAuthorName,
    aboutMe: aAboutMe,
    authorInfluence: aAuthorInfluence,
    workInfluence: aWorkInfluence,
    authUser: aAuthUser,
    publicProfile: aPublicProfile
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
    //console.log(author.aId);
    mutate(authorData);
    //redirect('/authors');
    // setName('');
    // setStyle('');
    // setAuthorInfluence('');
    // setWorkInfluence('');
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
        <button className="btn btn-primary join-item" type="submit">Author</button>
      </div>
    </form>
  )
}
export default EditAuthorForm;


