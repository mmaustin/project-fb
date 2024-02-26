'use client'

import { workDelete } from "@/utils/actions";


const WorkDelete = ({ noteId, workID }) => {
  const deleteHandler = async () => {

    await workDelete(noteId, workID);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-primary join-item" type="button">Delete</button>
  )
}
export default WorkDelete;