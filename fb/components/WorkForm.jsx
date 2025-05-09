"use client"

import { createWork } from "@/utils/actions";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const WorkForm = ({ workAuthor }) => {

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
      writingStage: "Brainstorming"
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">

      <div className="w-full sm:w-3/4 flex flex-col items-center border-2 border-base-300 bg-base-300 gap-1 rounded-lg">

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] rounded-tl-lg capitalize focus:outline-none" placeholder="Title (min: 1, max: 40)" name="title" value={workData.title} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center rounded-tr-lg font-bold ${workData.title.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{workData.title.length}</span></div>

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Genre (min: 1, max: 30)" name="genre" value={workData.genre} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${workData.genre.length >= 31 ? 'bg-error' : 'bg-success/50'}`}>{workData.genre.length}</span></div>

        <div className="flex flex-row w-full"><textarea onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Synopsis (min: 10, max: 250)" name="synopsis" value={workData.synopsis} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${workData.synopsis.length >= 251 ? 'bg-error' : 'bg-success/50'}`}>{workData.synopsis.length}</span></div>

        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={workData.authUser} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authName" value={workData.authorName} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={workData.createdBy} required />

        <select onChange={handleInputChange} className="select join-item w-full mb-1 focus:outline-none" name="writingStage" value={workData.writingStage} >
          {writingStateOptions}
        </select>

        <button className="w-auto btn btn-xs border-2 border-success join-item rounded-lg mb-1" type="submit">Create Work</button>

      </div>
    </form>
  )
}
export default WorkForm;