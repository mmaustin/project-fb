import { getAuthorNotes, getAuthorWithAuth, getAuthorsWorks } from "@/utils/actions";
import { auth } from "@clerk/nextjs";

const AuthorActivityPage = async () => {

  const { userId } = auth();
  let author = await getAuthorWithAuth(userId);
  let authorWorks = await getAuthorsWorks(author._id);
  let authorNotes = await getAuthorNotes(author.authorName);
  let allAuthorAssets = [...authorWorks, ...authorNotes];
  // console.log(allAuthorAssets);

  return (
    <div>Author Activity Page</div>
  )
};
export default AuthorActivityPage;