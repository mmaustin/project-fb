import { getWorkNotes } from "@/utils/actions"


const NoteList = async ({ workId }) => {

  const workNotes = await getWorkNotes();

  console.log(workNotes);

  return (
    <div>Note List</div>
  )
}
export default NoteList