import { getWorkNotes } from "@/utils/actions";
import NoteDelete from "./NoteDelete";

const NoteList = async ({ workId, workTitle }) => {

  const workNotes = await getWorkNotes(workId);

  if (workNotes.length === 0) {
    return (
      <h2 className="mt-8 font-serif text-lg capitalize"><span className="italic">{workTitle}</span> has no notes.</h2>
    )
  };
  const displayNotes = workNotes.map(note => {
    let noteID = note._id.toString();
    return <div key={note._id} className="border-2 border-base-300 w-full h-[180px] rounded-lg">
      <div className="relative shadow-xl h-full">
        {/* <div className=""> */}
        <h2 className="pt-2 pl-2 pb-2 font-bold text-sm font-serif">{note.category}</h2>
        <p className="pl-2 font-serif text-base">{note.content}</p>
        <div className="absolute bottom-2 left-2">
          <NoteDelete noteId={noteID} workID={workId} />
          {/* </div> */}
        </div>
      </div>
    </div>
  })
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start w-full">
      {displayNotes}
    </div>
  )
}
export default NoteList;