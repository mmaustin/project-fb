"use client"

import { createNote } from "@/utils/actions"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"


const NoteForm = ({ workProperties }) => {
  //console.log(authUser, authorName, authorId);
  console.log(workProperties.authorName);
  return (
    <div className="px-6 py-6">
      <p>{workProperties.authUser}</p>
      <p>{workProperties.authorName}</p>
      <p>{workProperties.authorId}</p>
    </div>
  )
}
export default NoteForm