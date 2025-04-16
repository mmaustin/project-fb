import { getDemoWorkNotes } from "@/utils/demoActions"
import DemoNoteDelete from "./DemoNoteDelete";

const DemoNoteList = async ({ workId, workTitle }) => {

  const workNotes = await getDemoWorkNotes(workId);

  if (workNotes.length === 0) {
    return (
      <h2 className="mt-8 font-serif text-lg capitalize"><span className="italic">{workTitle}</span> has no notes.</h2>
    )
  };

  const displayNotes = workNotes.map(note => {
    let noteID = note._id.toString();
    return <div key={note._id} className=" w-full h-[225px] rounded-lg">
      <div className="card h-[225px] shadow-xl border-2 border-base-300">
        <div className="card-body">
          <h2 className="card-title">{note.category}</h2>
          <p className="pl-2 font-serif text-sm">{note.content}</p>
          <div className="card-actions justify-center">
            <DemoNoteDelete noteId={noteID} workID={workId} />
          </div>
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
export default DemoNoteList