'use client'

import { workDelete } from "@/utils/actions";


const WorkDelete = ({ workId }) => {
  const deleteHandler = async () => {

    await workDelete(workId);
    //redirect('/authors');
  }

  return (
    <button onClick={deleteHandler} className="btn btn-info btn-xs rounded-lg" type="button">Delete</button>
  )
}
export default WorkDelete;