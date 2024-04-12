import { getAuthorNotes, getAuthorWithAuth } from "@/utils/actions";
import AuthorNotesDisplay from "./AuthorNotesDisplay";

const AuthorChart = async ({ authorId }) => {

  const author = await getAuthorWithAuth(authorId);

  let notes;
  if (author) {
    notes = await getAuthorNotes(author.authorName);
  }

  const noteContents = notes.map(note => {
    return note.content;
  });

  return (
    <div className="">
      <div className="capitalize font-bold">here are your stats, {author.authorName}!</div>
      <AuthorNotesDisplay authorsNotes={noteContents} />
    </div>
  )
}
export default AuthorChart;