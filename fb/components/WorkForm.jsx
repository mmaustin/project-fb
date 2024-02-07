"use client"

import { createWork } from "@/utils/actions";
import { useRef, useState } from "react";
import { useFormStatus, useFormState } from 'react-dom';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


const initialState = { number: 1 };


const WorkForm = ({ authorId }) => {
  const ref = useRef(null);
  const sendWithAuthorId = createWork.bind(null, authorId);


  const [state, formAction] = useFormState(sendWithAuthorId, initialState);

  const [stat, setStat] = useState(1);


  return (
    <form ref={ref} action={formAction
      //function () {
      //ref?.current.reset();
      //formAction;
      //setStat(stat + 1);
      //await createWork(authorId, formData);
    }>
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}

      {state.number > stat && <p>success</p>}
      {state.number < stat && <p>error</p>}

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
export default WorkForm;