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

      <div className="w-full sm:w-3/4 flex flex-col items-center border-2 border-base-300 bg-base-300 gap-1 rounded-lg">

        <div className="flex flex-row w-full"><input onChange={handleInputChange} type="text" className="input join-item w-[90%] sm:w-[94%] rounded-tl-lg capitalize focus:outline-none" placeholder="Note (min: 1, max: 100)" name="content" value={noteData.content} required /><span className={`text-xs w-[10%] sm:w-[6%] flex justify-center items-center rounded-tr-lg font-bold ${noteData.content.length >= 101 ? 'bg-error' : 'bg-success/50'}`}>{noteData.content.length}</span></div>

        <input hidden readOnly type="text" className="input join-item w-full" name="createdBy" value={noteData.createdBy} required />
        <select onChange={handleInputChange} className="select join-item w-full focus:outline-none" name="category" value={noteData.category} >
          {categoryOptions}
        </select>

        <button className="w-auto btn btn-xs border-2 border-success join-item rounded-lg my-2" type="submit">New Note</button>

      </div>
    </form>
  )
}
export default NoteForm;