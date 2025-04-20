'use client';

import { demoWorkDelete } from "@/utils/demoActions"


const DemoWorkDelete = ({ workId }) => {

  const deleteHandler = async () => {

    await demoWorkDelete(workId);
  };

  return (
    <>
      <button onClick={deleteHandler} className="btn btn-xs border-2 border-error rounded-lg sm:tooltip tooltip-top tooltip-error" data-tip="You will delete this work." type="button">Delete</button>
    </>
  )
}
export default DemoWorkDelete