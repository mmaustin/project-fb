"use client"

import { createAuthor } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

//import { useRef } from "react";
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
  // const ref = useRef(null);
  // const [state, formAction] = useFormState(createAuthor, initialState);

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
    const formData = new FormData(e.currentTarget);
    const author = Object.fromEntries(formData.entries());
    mutate(author);
  }

  return (
    <form onSubmit={handleSubmit}
    //action={handleSubmit
    //ref?.current.reset();
    >
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}
      <div className=" w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="Name" name="name" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="Style" name="style" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" required />
        <button className="btn btn-primary join-item" type="submit">Author</button>
      </div>
    </form>
  )
}
export default AuthorForm;