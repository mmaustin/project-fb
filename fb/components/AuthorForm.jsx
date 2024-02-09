"use client"

import { createAuthor } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { auth } from "@clerk/nextjs";
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

const AuthorForm = () => {
  // const [state, formAction] = useFormState(createAuthor, initialState);

  const { userId } = auth();

  const [authorData, setAuthorData] = useState({
    authorName: "",
    style: "",
    authorInfluence: "",
    workInfluence: "",
    authUser: userId,
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
    // const formData = new FormData(e.currentTarget);
    // const author = Object.fromEntries(formData.entries());
    mutate(authorData);
    // console.log(formData);
    // setName('');
    // setStyle('');
    // setAuthorInfluence('');
    // setWorkInfluence('');
    setAuthorData(prevAuthorData => ({
      ...prevAuthorData,
      authorName: "",
      style: "",
      authorInfluence: "",
      workInfluence: ""
    }));
    //console.log(authorData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}
      <div className=" w-full">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Name" name="authorName" value={authorData.authorName} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Style" name="style" value={authorData.style} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" value={authorData.authorInfluence} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" value={authorData.workInfluence} required />
        <input hidden type="text" className="input input-bordered join-item w-full" name="authUser" value={authorData.authUser} required />
        <button className="btn btn-primary join-item" type="submit">Author</button>

      </div>
    </form>
  )
}
export default AuthorForm;