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
    writingStage: "Brainstorming",
    createdBy: workAuthor.aId
  });


  const writingStateOptions = ['Brainstorming', 'Drafting', 'Editing'].map((opt, i) => {
    return (
      <option className="m-0" key={`${opt}: ${i}`} value={opt}>{opt}</option>
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
      writingStage: "Brainstorming"
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
      <div className="w-80 md:w-96">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full rounded-lg" placeholder="Title" name="title" value={workData.title} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full rounded-lg" placeholder="genre" name="genre" value={workData.genre} required />
        <textarea onChange={handleInputChange} type="textarea" className="textarea input input-bordered join-item w-full rounded-lg" placeholder="Synopsis" name="synopsis" value={workData.synopsis} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={workData.authUser} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authName" value={workData.authorName} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={workData.createdBy} required />
        <select onChange={handleInputChange} className="select select-primary join-item w-full rounded-lg" name="writingStage" value={workData.writingStage} >
          {/* <option >Public or Private?</option> */}
          {writingStateOptions}
        </select>
        <button className="btn btn-accent btn-xs join-item rounded-lg" type="submit">New Work</button>
      </div>
    </form>
  )
}
export default WorkForm;