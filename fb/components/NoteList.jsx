import { getWorkNotes } from "@/utils/actions";
import NoteDelete from "./NoteDelete";

const NoteList = async ({ workId }) => {

  const workNotes = await getWorkNotes(workId);

  if (workNotes.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">there are no notes</h2>
    )
  };
  //w-80 mx-8 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg
  const displayNotes = workNotes.map(note => {
    let noteID = note._id.toString();
    return <div key={note._id} className="carousel-item w-full mx-8 flex flex-col justify-center items-start rounded-lg shadow-lg mt-2">
      <h4 className="text-md uppercase ml-2 font-bold">
        created: {new Date(note.createdAt).toDateString()}
      </h4>
      <h4 className="text-md capitalize ml-2">
        {note.category}
      </h4>
      <h4 className="ml-2 text-info text-md capitalize">
        {note.content}
      </h4>
      <div className="mb-2 ml-2">
        <NoteDelete noteId={noteID} workID={workId} />
      </div>
    </div>
  })
  //mt-8 w-96 lg:w-full flex flex-wrap justify-center items-center md:flex-wrap
  return (
    <div className="w-80 md:w-96 carousel rounded-box mt-4 mb-4 shadow-2xl">
      {displayNotes}
    </div>
  )
}
export default NoteList