'use client'

import { workDelete } from "@/utils/actions";


const WorkDelete = ({ workId }) => {

  const deleteHandler = async () => {

    await noteDelete(workId);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-primary join-item" type="button">Delete</button>
  )
}
export default WorkDelete;