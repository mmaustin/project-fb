"use client"

import { createAuthor } from "@/utils/actions";
//import { useEffect } from "react";
import { useFormStatus, useFormState } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary join-item" disabled={pending}>
      {pending ? 'please wait . . .' : 'Author'}
    </button>
  )
};
//[action.payload.name]: action.payload.value,
const initialState = { message: null };

const AuthorForm = () => {

  const [state, formAction] = useFormState(createAuthor, initialState);

  return (
    <form action={formAction}>
      {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null}
      <div className=" w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="Name" name="name" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="Style" name="style" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" required />
        <SubmitBtn />
      </div>
    </form>
  )
}
export default AuthorForm;