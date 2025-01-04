'use client'

import { workDelete } from "@/utils/actions";


const WorkDelete = ({ workId }) => {
  const deleteHandler = async () => {

    await workDelete(workId);
  }

  return (
    <>
      <button onClick={deleteHandler} className="btn btn-xs border-2 border-error rounded-lg sm:tooltip tooltip-top tooltip-error" data-tip="You will delete this work." type="button">Delete<span className="ml-2 text-error sm:hidden">*</span></button>
    </>
  )
}
export default WorkDelete;