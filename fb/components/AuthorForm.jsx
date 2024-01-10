"use client"

import { createAuthor } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary join-item" disabled={pending}>
      {pending ? 'please wait . . .' : 'Author'}
    </button>
  )
};

// const createAutho = async (formData) => {
//   'use server'
//   const name = formData.get('name');
//   const style = formData.get('style');
//   const authorInfluence = formData.get('authorInfluence');
//   const workInfluence = formData.get('workInfluence');
//   console.log(name, style, authorInfluence, workInfluence);
// }

const initialState = { message: null };

const AuthorForm = () => {

  const [state, formAction] = useFormState(createAuthor, initialState);

  return (
    <form action={formAction}>
      {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="name" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="style" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="authorInfluence" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="workInfluence" required />
        {/* <button type="submit">create author</button> */}
        <SubmitBtn />
      </div>
    </form>
  )
}
export default AuthorForm;