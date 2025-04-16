'use client';

import { demoNoteDelete } from "@/utils/demoActions";


const DemoNoteDelete = ({ noteId, workID }) => {

  const deleteHandler = async () => {
    await demoNoteDelete(noteId, workID);
  };

  return (
    <>
      <button onClick={deleteHandler} className="btn btn-xs border-2 border-error rounded-lg sm:tooltip tooltip-top tooltip-error" data-tip="You will delete this note." type="button">Delete Note<span className="ml-2 text-error sm:hidden">*</span></button>
    </>
  )
}
export default DemoNoteDelete