'use client'

import { globalDelete } from "@/utils/actions";


const GlobalDelete = ({ noteId, workID }) => {
  const deleteHandler = async () => {

    await globalDelete(noteId, workID);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-primary join-item" type="button">Delete</button>
  )
}
export default GlobalDelete