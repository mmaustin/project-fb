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
    return <div key={note._id} className="border-2 border-base-300 h-[180px] w-[200px] rounded-lg">
      <div className="relative shadow-xl h-full">
        <h2 className="pt-2 pl-2 pb-2 font-bold text-sm font-serif">{note.category}</h2>
        <p className="pl-2 font-serif text-base">{note.content}</p>
        <div className="absolute bottom-2 left-2">
          <DemoNoteDelete noteId={noteID} workID={workId} />
        </div>
      </div>
    </div>
  })

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start w-full border">
      {displayNotes}
    </div>
  )
}
export default DemoNoteList