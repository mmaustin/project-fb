"use client"

import { editWork } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";



const EditWorkForm = ({ workToEdit }) => {

  const { workId, workTitle, workGenre, workSynopsis, workAuthorName, workAuthUser, workWritingStage, workCreatedBy } = workToEdit;

  const [editWorkData, setEditWorkData] = useState({
    workId,
    workTitle,
    workGenre,
    workSynopsis,
    workWritingStage
  });

  const writingStateOptions = ['Brainstorming', 'Drafting', 'Editing'].map((opt, i) => {
    return (
      <option key={`${opt}: ${i}`} value={opt}>{opt}</option>
    )
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditWorkData((prevEditWorkData) => ({
      ...prevEditWorkData,
      [name]: value,
    }));
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: async (work) => {
      const editedWork = await editWork(work);
      if (editedWork) {
        toast.success('Work Successfully Edited!');
        return editedWork;
      }
      toast.error('Something went wrong. Try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(editWorkData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
      <p className="capitalize m-4 font-serif text-lg">edit <span className="font-serif italic underline">{editWorkData.workTitle}</span></p>
      <div className="w-full sm:w-3/4 flex flex-col items-center border-2 border-base-300 bg-base-300 rounded-lg">
        <input onChange={handleInputChange} type="text" className="input join-item w-full rounded-lg capitalize mb-1" placeholder="Title (min: 1, max: 40)" name="workTitle" value={editWorkData.workTitle} required />
        <input onChange={handleInputChange} type="text" className="input join-item w-full rounded-lg capitalize mb-1" placeholder="Genre (min: 1, max: 40)" name="workGenre" value={editWorkData.workGenre} required />
        <textarea onChange={handleInputChange} type="textarea" className="textarea input join-item w-full rounded-lg capitalize mb-1" placeholder="Synopsis (min: 25, max: 250)" name="workSynopsis" value={editWorkData.workSynopsis} required />
        <select onChange={handleInputChange} className="select join-item w-full rounded-lg mb-1" name="workWritingStage" value={editWorkData.workWritingStage} >
          {writingStateOptions}
        </select>
        <div className="flex justify-center items-center w-full">
          <button className=" btn btn-xs join-item mr-2 border-2 border-success rounded-lg" type="submit">Apply Edits</button>
          <Link href={`/works/${workId}`} className="btn btn-xs rounded-lg">Work Page</Link>
        </div>
      </div>
    </form>
  )
}
export default EditWorkForm;