"use client"

import { editAuthor } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";


const EditAuthorForm = ({ params }) => {

  const authorParamId = params.id;

  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [authorInfluence, setAuthorInfluence] = useState('');
  const [workInfluence, setWorkInfluence] = useState('');


  const { mutate, isPending, data } = useMutation({
    mutationFn: async (author) => {
      const updatedAuthor = await editAuthor(author);
      if (updatedAuthor) {
        toast.success('Author Updated');
        return updatedAuthor;
      }
      toast.error('Something went wrong. Try updating again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({ name, style, authorInfluence, workInfluence, authorParamId });

    setName('');
    setStyle('');
    setAuthorInfluence('');
    setWorkInfluence('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=" w-full">
        <input onChange={(e) => setName(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="Name" name="name" value={name} required />
        <input onChange={(e) => setStyle(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="Style" name="style" value={style} required />
        <input onChange={(e) => setAuthorInfluence(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="Influenced By" name="authorInfluence" value={authorInfluence} required />
        <input onChange={(e) => setWorkInfluence(e.target.value)} type="text" className="input input-bordered join-item w-full" placeholder="A Favorite Work" name="workInfluence" value={workInfluence} required />
        <button className="btn btn-primary join-item" type="submit">Author</button>
      </div>
    </form>
  )
}
export default EditAuthorForm;


