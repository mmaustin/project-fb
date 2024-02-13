"use client"

import { createWork } from "@/utils/actions";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const WorkForm = ({ workAuthor }) => {
  // const workAuthor = await getSingleAuthor(authorId);
  //console.log(workAuthor);

  const [workData, setWorkData] = useState({
    title: "",
    genre: "",
    synopsis: "",
    authUser: workAuthor.aAuthUser,
    authorName: workAuthor.aAuthorName,
    writingState: "Brainstorming",
    createdBy: workAuthor.aId
  });

  console.log(workData);

  const profileOptions = ['Brainstorming', 'Drafting', 'Editing'].map((opt, i) => {
    return (
      <option key={`${opt}: ${i}`} value={opt}>{opt}</option>
    )
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prevWorkData) => ({
      ...prevWorkData,
      [name]: value,
    }));
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: async (work) => {
      const newWork = await createWork(work);
      if (newWork) {
        toast.success('New Work Created!');
        return newWork;
      }
      toast.error('Something went wrong. Try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(workData);
    setAuthorData(prevWorkData => ({
      ...prevWorkData,
      title: "",
      genre: "",
      synopsis: "",
      writingState: "Brainstorming"
    }));
  };

  return (
    <div>
      work it out!
    </div>
    // <form>

    //   <div className=" w-full">
    //     <input type="text" className="input input-bordered join-item w-full" placeholder="title" name="title" required />
    //     <input type="text" className="input input-bordered join-item w-full" placeholder="genre" name="genre" required />
    //     <input type="text" className="input input-bordered join-item w-full" placeholder="synopsis" name="synopsis" required />
    //     <input type="number" className="input input-bordered join-item w-full" placeholder="word count" name="wordCount" />
    //     <button type="submit">Create Work</button>
    //   </div>
    // </form>
  )
}
export default WorkForm;