'use client'

import { workDelete } from "@/utils/actions";


const WorkDelete = ({ workId }) => {
  console.log(workId);
  const deleteHandler = async () => {

    await workDelete(workId);
  }

  return (
    <button onClick={deleteHandler} className="btn btn-primary join-item" type="button">Delete</button>
  )
}
export default WorkDelete;