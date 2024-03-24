'use client'

import { noteDelete } from "@/utils/actions";


const NoteDelete = ({ noteId, workID }) => {
  const deleteHandler = async () => {

    await noteDelete(noteId, workID);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-info btn-xs rounded-lg" type="button">Delete</button>
  )
}
export default NoteDelete;