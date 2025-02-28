import WorksList from "@/components/WorksList";
import { getAuthorWithAuth } from "@/utils/actions";
import { auth } from "@clerk/nextjs";

const Works = async () => {

  const { userId } = auth();
  const author = await getAuthorWithAuth(userId);

  if (!author) {
    return <h3 className="capitalize">you've yet to create a profile</h3>
  }

  const { _id, authorName } = author;

  return (
    <div className="mx-6 md:mx-0 w-80 md:w-2/3 rounded-lg shadow-2xl border border-neutral-50 flex flex-wrap justify-center items-center">
      <WorksList authorId={_id.toString()} authorName={authorName} />
    </div>
  )
}
export default Works;