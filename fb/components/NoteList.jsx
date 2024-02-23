import { getWorkNotes } from "@/utils/actions"


const NoteList = async ({ workId }) => {

  const workNotes = await getWorkNotes(workId);

  if (workNotes.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">there are no notes</h2>
    )
  }

  return (
    <div className="mt-8">
      {workNotes.map(note => {
        return <div key={note._id} className="flex-col justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lf shadow-lg">
          <h4 className="text-lg capitalize">
            {note.category}
          </h4>
          <h4 className="text-lg capitalize">
            {note.content}
          </h4>
        </div>
      })}
    </div>
  )
}
export default NoteList