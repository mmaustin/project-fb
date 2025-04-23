"use client"

import { createDemoWork } from "@/utils/demoActions";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const DemoWorkForm = ({ demoAuthor }) => {
  const workAuthor = JSON.parse(demoAuthor);


  const [workData, setWorkData] = useState({
    title: "",
    genre: "",
    synopsis: "",
    authorName: workAuthor.authorName,
    writingStage: "Brainstorming",
    createdBy: workAuthor._id
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
      const newWork = await createDemoWork(work);
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
      <div className="w-full sm:w-3/4 flex flex-col items-center border-2 border-base-300 bg-base-300 rounded-lg">
        <input onChange={handleInputChange} type="text" className="input join-item w-full rounded-lg capitalize mb-1" placeholder="Title (min: 1, max: 40)" name="title" value={workData.title} required /><span>{workData.title.length}</span>
        <input onChange={handleInputChange} type="text" className="input join-item w-full rounded-lg capitalize mb-1" placeholder="Genre (min: 1, max: 30)" name="genre" value={workData.genre} required /><span>{workData.genre.length}</span>
        <textarea onChange={handleInputChange} type="textarea" className="textarea input join-item w-full rounded-lg capitalize mb-1" placeholder="Synopsis (min: 10, max: 250)" name="synopsis" value={workData.synopsis} required /><span>{workData.synopsis.length}</span>
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authName" value={workData.authorName} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={workData.createdBy} required />
        <select onChange={handleInputChange} className="select join-item w-full rounded-lg mb-1" name="writingStage" value={workData.writingStage} >
          {writingStateOptions}
        </select>
        <button className="w-auto btn btn-xs border-2 border-success join-item rounded-lg mb-1" type="submit">Create Work</button>
      </div>
    </form>
  )
}
export default DemoWorkForm;