'use client'

import { noteDelete } from "@/utils/actions";


const NoteDelete = ({ noteId, workID }) => {
  const deleteHandler = async () => {

    await noteDelete(noteId, workID);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-accent btn-xs mb-2 md:mb-0 rounded-lg" type="button">Delete Note</button>
  )
}
export default NoteDelete;