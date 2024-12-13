import { getWorkNotes } from "@/utils/actions";
import NoteDelete from "./NoteDelete";

const NoteList = async ({ workId, workTitle }) => {

  const workNotes = await getWorkNotes(workId);

  if (workNotes.length === 0) {
    return (
      <h2 className="mt-8 font-bold text-lg capitalize"><span className="text-blue">{workTitle}</span> has no notes.</h2>
    )
  };
  const displayNotes = workNotes.map(note => {
    let noteID = note._id.toString();
    return <div key={note._id} className="carousel-item w-full mx-8 flex flex-col justify-center items-start rounded-lg shadow-lg mt-2">
      <h4 className="text-md uppercase ml-2 font-bold">
        created: {new Date(note.createdAt).toDateString()}
      </h4>
      <h4 className="text-md capitalize ml-2">
        {note.category}
      </h4>
      <h4 className="ml-2 font-semibold text-md capitalize">
        {note.content}
      </h4>
      <div className="flex justify-center w-full">
        <NoteDelete noteId={noteID} workID={workId} />
      </div>
    </div>
  })
  return (
    <div className="w-80  md:h-80 carousel rounded-box mt-4 mb-4 shadow-2xl border-t-2 border-t-base-300">
      {displayNotes}
    </div>
  )
}
export default NoteList;