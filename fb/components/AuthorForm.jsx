"use client"

import { createAuthor } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
//import { auth } from "@clerk/nextjs";
//import { useEffect } from "react";
//import { useFormStatus, useFormState } from 'react-dom';

// const SubmitBtn = () => {
//   const { pending } = useFormStatus();

//   return (
//     <button type="submit" className="btn btn-primary join-item" disabled={pending}>
//       {pending ? 'please wait . . .' : 'Author'}
//     </button>
//   )
// };
//[action.payload.name]: action.payload.value,
//const initialState = { message: null };

const AuthorForm = ({ authUser }) => {
  // const [state, formAction] = useFormState(createAuthor, initialState);

  //const { userId } = auth();

  const [authorData, setAuthorData] = useState({
    authorName: "",
    aboutMe: "",
    authorInfluence: "",
    workInfluence: "",
    authUser,
    publicProfile: "Public"
  });
  //console.log(authUser);

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

  // const [authorName, setName] = useState('');
  // const [style, setStyle] = useState('');
  // const [authorInfluence, setAuthorInfluence] = useState('');
  // const [workInfluence, setWorkInfluence] = useState('');


  const { mutate, isPending, data } = useMutation({
    mutationFn: async (author) => {
      const newAuthor = await createAuthor(author);
      if (newAuthor) {
        toast.success('New Author Created!');
        return newAuthor;
      }
      toast.error('Something went wrong. Try again.');
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
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}
      <div className=" w-full">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Name" name="authorName" value={authorData.authorName} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" value={authorData.authorInfluence} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" value={authorData.workInfluence} required />
        <input onChange={handleInputChange} type="textarea" className="input input-bordered join-item w-full" placeholder="Tell Us About Yourself" name="aboutMe" value={authorData.aboutMe} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={authorData.authUser} required />
        <select onChange={handleInputChange} className="select select-primary w-full max-w-xs" name="publicProfile" value={authorData.publicProfile} >
          {/* <option >Public or Private?</option> */}
          {profileOptions}
        </select>
        <button className="btn btn-primary join-item" type="submit">Author</button>

      </div>
    </form>
  )
}
export default AuthorForm;