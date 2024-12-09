"use client"

import { createNote } from "@/utils/actions"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"


const NoteForm = ({ workProperties }) => {

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
    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
      {/* <p className="capitalize font-bold text-blue m-4">add a note</p> */}
      <div className="w-80 flex flex-col border-4 border-base-300 bg-base-300">
        <input onChange={handleInputChange} type="text" className="input join-item w-full rounded-lg capitalize mb-1" placeholder="Note (min: 20, max: 100)" name="content" value={noteData.content} required />
        <input hidden readOnly type="text" className="input join-item w-full" name="createdBy" value={noteData.createdBy} required />
        <select onChange={handleInputChange} className="select join-item w-full rounded-lg" name="category" value={noteData.category} >
          {categoryOptions}
        </select>
        <div className="flex justify-center">
          <button className="w-1/3 btn btn-accent btn-xs join-item rounded-lg my-2" type="submit">New Note</button>
        </div>
      </div>
    </form>
  )
}
export default NoteForm;