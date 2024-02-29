'use client'

import { workDelete } from "@/utils/actions";


const WorkDelete = ({ workId }) => {
  const deleteHandler = async () => {

    await workDelete(workId);
    //redirect('/authors');
  }

  return (
    <button onClick={deleteHandler} className="btn btn-success" type="button">Delete</button>
  )
}
export default WorkDelete;