"use client"

import { createNote } from "@/utils/actions"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"


const NoteForm = ({ workProperties }) => {
  //console.log(authUser, authorName, authorId);
  //console.log(workProperties.authorName);
  //console.log(workProperties);

  const [noteData, setNoteData] = useState({
    content: "",
    category: "Musings",
    createdBy: workProperties.workId,
    authUser: workProperties.authUser,
    authorName: workProperties.authorName,
    authorId: workProperties.authorId
  });

  const categoryOptions = ['Musings', 'Character', 'Plot', 'Setting'].map((opt, i) => {
    return (
      <option key={`${opt}: ${i}`} value={opt}>{opt}</option>
    )
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: async (note) => {
      const newNote = await createNote(note);
      if (newNote) {
        toast.success('New Note Created!');
        return newNote;
      }
      toast.error('Something went wrong. Try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(noteData);
    setNoteData(prevNoteData => ({
      ...prevNoteData,
      content: "",
      category: "Musings",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" w-full">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full" placeholder="Content" name="content" value={noteData.content} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={noteData.createdBy} required />
        <select onChange={handleInputChange} className="select select-primary w-full max-w-xs" name="category" value={noteData.category} >
          {/* <option >Public or Private?</option> */}
          {categoryOptions}
        </select>
        <button className="btn btn-primary join-item" type="submit">New Note</button>
      </div>
    </form>
  )
}
export default NoteForm