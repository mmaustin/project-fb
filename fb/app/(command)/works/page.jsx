import WorksList from "@/components/WorksList";
import { getAuthorWithAuth } from "@/utils/actions";
import { auth } from "@clerk/nextjs";

const Works = async () => {

  const { userId } = auth();
  const author = await getAuthorWithAuth(userId);
  const { _id, authorName } = author;

  return (
    <div className="w-96 md:w-2/3 rounded-lg shadow-2xl flex flex-wrap justify-center items-center">
      <WorksList authorId={_id.toString()} authorName={authorName} />
    </div>
  )
}
export default Works;