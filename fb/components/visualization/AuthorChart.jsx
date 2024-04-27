import { getAuthorNotes, getAuthorWithAuth } from "@/utils/actions";
import AuthorNotesDisplay from "./AuthorNotesDisplay";

const AuthorChart = async ({ authorId }) => {

  const author = await getAuthorWithAuth(authorId);

  let notes;
  if (author) {
    notes = await getAuthorNotes(author.authorName);
  }

  const noteContents = notes.map(note => {
    let noteCreatedAt = new Date(note.createdAt).toDateString()
    return { noteContent: note.content, noteCategory: note.category, noteAuthor: note.authorName, createdAt: noteCreatedAt };
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="capitalize font-bold text-lg my-4">your note stats</div>
      <AuthorNotesDisplay notesToChart={noteContents} />
    </div>
  )
}
export default AuthorChart;