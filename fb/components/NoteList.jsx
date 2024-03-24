import { getWorkNotes } from "@/utils/actions";
import NoteDelete from "./NoteDelete";

const NoteList = async ({ workId }) => {

  const workNotes = await getWorkNotes(workId);

  if (workNotes.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">there are no notes</h2>
    )
  };

  const displayNotes = workNotes.map(note => {
    let noteID = note._id.toString();
    return <div key={note._id} className="w-80 mx-8 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg">
      <h4 className="text-lg capitalize">
        {note.category}
      </h4>
      <h4 className="text-lg capitalize">
        {note.content}
      </h4>
      <NoteDelete noteId={noteID} workID={workId} />
    </div>
  })

  return (
    <div className="mt-8 w-96 lg:w-full flex flex-wrap justify-center items-center md:flex-wrap">
      {displayNotes}
    </div>
  )
}
export default NoteList