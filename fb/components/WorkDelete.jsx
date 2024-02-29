'use client'

import { workDelete } from "@/utils/actions";
import { redirect } from "next/navigation";


const WorkDelete = ({ workId }) => {
  console.log(workId);
  const deleteHandler = async () => {

    await workDelete(workId);
    //redirect('/authors');
  }

  return (
    <button onClick={deleteHandler} className="btn btn-success" type="button">Delete</button>
  )
}
export default WorkDelete;