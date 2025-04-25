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

      <div className="w-full sm:w-3/4 flex flex-col items-center border-2 border-base-300 bg-base-300 gap-1 rounded-lg">

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] rounded-tl-lg capitalize focus:outline-none" placeholder="Title (min: 1, max: 40)" name="workTitle" value={editWorkData.workTitle} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center rounded-tr-lg font-bold ${editWorkData.workTitle.length >= 41 ? 'bg-error' : 'bg-success/50'}`}>{editWorkData.workTitle.length}</span></div>

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Genre (min: 1, max: 30)" name="workGenre" value={editWorkData.workGenre} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${editWorkData.workGenre.length >= 31 ? 'bg-error' : 'bg-success/50'}`}>{editWorkData.workGenre.length}</span></div>

        <div className="flex flex-row w-full"><textarea onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] capitalize focus:outline-none" placeholder="Synopsis (min: 10, max: 250)" name="workSynopsis" value={editWorkData.workSynopsis} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center font-bold ${editWorkData.workSynopsis.length >= 251 ? 'bg-error' : 'bg-success/50'}`}>{editWorkData.workSynopsis.length}</span></div>

        <select onChange={handleInputChange} className="select join-item w-full mb-1" name="workWritingStage" value={editWorkData.workWritingStage} >
          {writingStateOptions}
        </select>

        <div className="flex justify-center items-center w-full mb-1">

          <button className=" btn btn-xs join-item mr-2 border-2 border-success rounded-lg" type="submit">Apply Edits</button>

          <Link href={`/works/${workId}`} className="btn btn-xs rounded-lg">Work Page</Link>
        </div>
      </div>
    </form>
  )
}
export default EditWorkForm;