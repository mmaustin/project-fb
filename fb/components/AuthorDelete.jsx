'use client'

import { authorDelete } from "@/utils/actions";

const AuthorDelete = ({ authorId }) => {

  const deleteHandler = async () => {
    await authorDelete(authorId);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-info btn-xs rounded-lg" type="button">Delete Author</button>
  )
};
export default AuthorDelete;