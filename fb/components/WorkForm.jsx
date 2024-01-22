"use client"

import { createWork } from "@/utils/actions";
import { useRef } from "react";
import { useFormStatus, useFormState } from 'react-dom';


//const initialState = { message: null };


const WorkForm = ({ authorId }) => {
  const ref = useRef(null);
  //const sendWithAuthorId = createWork.bind(null, authorId);

  //const [state, formAction] = useFormState(sendWithAuthorId, initialState);

  return (
    <form ref={ref} action={async formData => {
      await createWork(formData);
      ref?.current.reset();
    }}>
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}
      <div className=" w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="title" name="title" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="genre" name="genre" required />
        <input type="text" className="input input-bordered join-item w-full" placeholder="synopsis" name="synopsis" required />
        <input type="number" className="input input-bordered join-item w-full" placeholder="word count" name="wordCount" />
        <button type="submit">Create Work</button>
      </div>
    </form>
  )
}
export default WorkForm