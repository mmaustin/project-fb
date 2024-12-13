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
      <div className=" shadow-xl h-full">
        <div className="">
          <h2 className="font-bold text-sm font-serif">{note.category}</h2>
          <p className="font-serif text-base">{note.content}</p>
          <div className=" justify-center">
            <NoteDelete noteId={noteID} workID={workId} />
          </div>
        </div>
      </div>
      {/* <h4 className="text-md uppercase ml-2 font-bold">
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
      </div> */}
    </div>
  })
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start w-full">
      {displayNotes}
    </div>
  )
}
export default NoteList;