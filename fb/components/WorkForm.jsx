"use client"

import { createWork } from "@/utils/actions";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const WorkForm = ({ workAuthor }) => {
  // const workAuthor = await getSingleAuthor(authorId);
  //console.log(workAuthor);

  const [workData, setWorkData] = useState({
    title: "",
    genre: "",
    synopsis: "",
    authUser: workAuthor.aAuthUser,
    authorName: workAuthor.aAuthorName,
    writingState: "Brainstorming",
    createdBy: workAuthor.aId
  });

  console.log(workData);

  const writingStateOptions = ['Brainstorming', 'Drafting', 'Editing'].map((opt, i) => {
    return (
      <option key={`${opt}: ${i}`} value={opt}>{opt}</option>
    )
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prevWorkData) => ({
      ...prevWorkData,
      [name]: value,
    }));
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: async (work) => {
      const newWork = await createWork(work);
      if (newWork) {
        toast.success('New Work Created!');
        return newWork;
      }
      toast.error('Something went wrong. Try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(workData);
    setWorkData(prevWorkData => ({
      ...prevWorkData,
      title: "",
      genre: "",
      synopsis: "",
      writingState: "Brainstorming"
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {state.message !== 'a' ? <p className="mb-2">{state.message}</p> : null} */}
      <div className=" w-full">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Title" name="title" value={workData.title} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="genre" name="genre" value={workData.genre} required />
        <input onChange={handleInputChange} type="textarea" className="input input-bordered join-item w-full" placeholder="Synopsis" name="synopsis" value={workData.synopsis} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={workData.authUser} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authName" value={workData.authorName} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={workData.createdBy} required />
        <select onChange={handleInputChange} className="select select-primary w-full max-w-xs" name="writingState" value={workData.writingState} >
          {/* <option >Public or Private?</option> */}
          {writingStateOptions}
        </select>
        <button className="btn btn-primary join-item" type="submit">New Work</button>
      </div>
    </form>
  )
}
export default WorkForm;