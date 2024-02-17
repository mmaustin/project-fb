"use client"

import { editWork } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";


const EditWorkForm = ({ workToEdit }) => {

  const { title, genre, synopsis, authorName, authUser, writingStage, createdBy } = workToEdit;

  const [editWorkData, setEditWorkData] = useState({
    title,
    genre,
    synopsis,
    authorName,
    authUser,
    writingStage,
    createdBy
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

  return (
    <div>{workToEdit.title}</div>
  )
}
export default EditWorkForm;