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
      <p className="capitalize m-4 font-bold text-lg">edit <span className="text-blue">{editWorkData.workTitle}</span></p>
      <div className="w-80 md:w-96 flex flex-col gap-4">
        <input onChange={handleInputChange} type="text" className="input border border-blue/50 join-item w-full rounded-lg capitalize" placeholder="Title (min: 1, max: 40)" name="workTitle" value={editWorkData.workTitle} required />
        <input onChange={handleInputChange} type="text" className="input border border-blue/50 join-item w-full rounded-lg capitalize" placeholder="Genre (min: 1, max: 40)" name="workGenre" value={editWorkData.workGenre} required />
        <textarea onChange={handleInputChange} type="textarea" className="textarea input border border-blue/50 join-item w-full rounded-lg" placeholder="Synopsis (min: 25, max: 250)" name="workSynopsis" value={editWorkData.workSynopsis} required />
        <select onChange={handleInputChange} className="input border border-blue/50 join-item w-full rounded-lg" name="workWritingStage" value={editWorkData.workWritingStage} >
          {writingStateOptions}
        </select>
        <div className="">
          <button className="w-1/3 btn btn-accent btn-xs join-item mr-2 rounded-lg" type="submit">Apply Edits</button>
          <Link href={`/works/${workId}`} className="w-1/3 btn btn-accent btn-xs rounded-lg">Work Page</Link>
        </div>
      </div>
    </form>
  )
}
export default EditWorkForm;