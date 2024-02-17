"use client"

import { editWork } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";


const EditWorkForm = ({ workToEdit }) => {

  const { _id, title, genre, synopsis, authorName, authUser, writingStage, createdBy } = workToEdit;

  const [editWorkData, setEditWorkData] = useState({
    title,
    genre,
    synopsis,
    authorName,
    authUser,
    writingStage,
    createdBy,
    _id
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
    <form onSubmit={handleSubmit}>
      <div className=" w-full">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Title" name="title" value={editWorkData.title} required />
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="genre" name="genre" value={editWorkData.genre} required />
        <input onChange={handleInputChange} type="textarea" className="input input-bordered join-item w-full" placeholder="Synopsis" name="synopsis" value={editWorkData.synopsis} required />
        {/* <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authUser" value={editWorkData.authUser} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="authName" value={editWorkData.authorName} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={editWorkData.createdBy} required /> */}
        <select onChange={handleInputChange} className="select select-primary w-full max-w-xs" name="writingState" value={editWorkData.writingState} >
          {/* <option >Public or Private?</option> */}
          {writingStateOptions}
        </select>
        <button className="btn btn-primary join-item" type="submit">Edit Work</button>
      </div>
    </form>
  )
}
export default EditWorkForm;