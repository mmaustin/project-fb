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
      console.log(newNote);
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
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
      <p className="capitalize font-semibold m-4 underline">add a note</p>
      <div className="w-80 md:w-96 flex flex-col">
        <input onChange={handleInputChange} type="text" className="input input-bordered join-item w-full rounded-lg" placeholder="Content (minimum 20 characters)" name="content" value={noteData.content} required />
        <input hidden readOnly type="text" className="input input-bordered join-item w-full" name="createdBy" value={noteData.createdBy} required />
        <select onChange={handleInputChange} className="select select-primary join-item w-full rounded-lg" name="category" value={noteData.category} >
          {categoryOptions}
        </select>
        <button className="w-1/3 btn btn-accent btn-xs join-item rounded-lg" type="submit">New Note</button>
      </div>
    </form>
  )
}
export default NoteForm;