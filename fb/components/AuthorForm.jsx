"use client"

import { createAuthor } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
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
  const ref = useRef(null);
  // const [state, formAction] = useFormState(createAuthor, initialState);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   style: "",
  //   authorInfluence: "",
  //   workInfluence: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const [authorName, setName] = useState('');
  const [style, setStyle] = useState('');
  const [authorInfluence, setAuthorInfluence] = useState('');
  const [workInfluence, setWorkInfluence] = useState('');


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
    mutate({ authorName, style, authorInfluence, workInfluence });
    // console.log(formData);
    setName('');
    setStyle('');
    setAuthorInfluence('');
    setWorkInfluence('');
  }

  return (
    <form onSubmit={
      //ref?.current.reset();
      handleSubmit
      //action={handleSubmit
    }>
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}
      <div className=" w-full">
        <input onChange={(e) => setName(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="Name" name="name" value={authorName} required />
        <input onChange={(e) => setStyle(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="Style" name="style" value={style} required />
        <input onChange={(e) => setAuthorInfluence(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" value={authorInfluence} required />
        <input onChange={(e) => setWorkInfluence(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" value={workInfluence} required />
        <button className="btn btn-primary join-item" type="submit">Author</button>
      </div>
    </form>
  )
}
export default AuthorForm;