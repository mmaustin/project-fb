'use client'

import { noteDelete } from "@/utils/actions";


const NoteDelete = ({ noteId, workID }) => {
  const deleteHandler = async () => {

    await noteDelete(noteId, workID);
  }

  return (
    <>
      <button onClick={deleteHandler} className="btn btn-xs border-2 border-error rounded-lg sm:tooltip tooltip-top tooltip-error" data-tip="You will delete this note." type="button">Delete Note<span className="ml-2 text-error sm:hidden">*</span></button>
    </>
  )
}
export default NoteDelete;