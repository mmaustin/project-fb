'use client'

import { authorDelete } from "@/utils/actions";

const AuthorDelete = ({ authorId }) => {

  const deleteHandler = async () => {
    await authorDelete(authorId);
  }

  return (
    <>
      <button onClick={deleteHandler} className="ml-1 btn btn-xs border-2 border-error rounded-lg sm:tooltip tooltip-top tooltip-error" data-tip="This button deletes your profile, all works, and all notes." type="button">Delete Profile<span className="text-error sm:hidden">*</span></button>
    </>
  )
};
export default AuthorDelete;