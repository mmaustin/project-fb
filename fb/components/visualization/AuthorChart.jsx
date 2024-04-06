import { getAuthorWithAuth } from "@/utils/actions";

const AuthorChart = async ({ authorId }) => {

  const author = await getAuthorWithAuth(authorId);
  console.log(author);
  return (
    <div>AuthorChart</div>
  )
}
export default AuthorChart;