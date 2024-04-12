import { getAuthorWithAuth } from "@/utils/actions";
import AuthorNotesDisplay from "./AuthorNotesDisplay";

const AuthorChart = async ({ authorId }) => {

  const author = await getAuthorWithAuth(authorId);

  return (
    <div className="">
      <div className="capitalize font-bold">here are your stats, {author.authorName}!</div>
      <AuthorNotesDisplay authorsName={author.authorName} />
    </div>
  )
}
export default AuthorChart;