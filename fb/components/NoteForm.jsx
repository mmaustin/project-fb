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

  return (
    <div className="px-6 py-6">
      <p>{workProperties.authUser}</p>
      <p>{workProperties.authorName}</p>
      <p>{workProperties.authorId}</p>
    </div>
  )
}
export default NoteForm