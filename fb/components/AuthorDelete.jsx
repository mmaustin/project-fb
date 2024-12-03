'use client'

import { authorDelete } from "@/utils/actions";

const AuthorDelete = ({ authorId }) => {

  const deleteHandler = async () => {
    await authorDelete(authorId);
  }

  return (
    <button onClick={deleteHandler} className=" btn btn-xs rounded-lg tooltip tooltip-top tooltip-error" data-tip="You Sure? You Will Lose Your Author Object, All Works, & all Notes." type="button">Delete Profile</button>
  )
};
export default AuthorDelete;