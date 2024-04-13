import { getAuthorNotes, getAuthorWithAuth } from "@/utils/actions";
import AuthorNotesDisplay from "./AuthorNotesDisplay";

const AuthorChart = async ({ authorId }) => {

  const author = await getAuthorWithAuth(authorId);

  let notes;
  if (author) {
    notes = await getAuthorNotes(author.authorName);
  }

  const noteContents = notes.map(note => {
    return { noteContent: note.content, noteCategory: note.category, noteAuthor: note.authorName, createdAt: note.createdAt };
  });

  return (
    <div className="">
      <div className="capitalize font-bold">here are your stats, {author.authorName}!</div>
      <AuthorNotesDisplay authorsNotes={noteContents} />
    </div>
  )
}
export default AuthorChart;