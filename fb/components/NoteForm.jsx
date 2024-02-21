"use client"

import { createNote } from "@/utils/actions"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"


const NoteForm = ({ workProperties }) => {
  //console.log(authUser, authorName, authorId);
  //console.log(workProperties.authorName);

  const [noteData, setNoteData] = useState({
    content: "",
    category: "Musings",
    createdBy: workProperties._id,
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
      const newNote = await createWork(note);
      if (newNote) {
        toast.success('New Note Created!');
        return newNote;
      }
      toast.error('Something went wrong. Try again.');
    },
  });

  return (
    <div className="px-6 py-6">
      <p>{workProperties.authUser}</p>
      <p>{workProperties.authorName}</p>
      <p>{workProperties.authorId}</p>
    </div>
  )
}
export default NoteForm