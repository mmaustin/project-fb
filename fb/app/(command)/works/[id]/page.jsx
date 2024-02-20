import NoteForm from "@/components/NoteForm";
import { getSingleWork } from "@/utils/actions";
import Link from "next/link";

const SingleWorkPage = async ({ params }) => {
  const work = await getSingleWork(params.id);

  const noteWorkProperties = { authUser: work.authUser, authorName: work.authorName, authorId: work.createdBy.toString() };
  console.log(noteWorkProperties);
  return (
    <>
      <div key={work._id} className="flex-col justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lf shadow-lg">
        <h4 className="text-lg capitalize">
          {work.title}
        </h4>
        <h4 className="text-lg capitalize">
          {work.genre}
        </h4>
        <h4 className="text-lg capitalize">
          {work.synopsis}
        </h4>
        <h4 className="text-lg capitalize">
          {work.authorName}
        </h4>
        <h4 className="text-lg capitalize">
          {work.writingStage}
        </h4>
        <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs" >
          Edit Work
        </Link>
      </div>
      <div className="px-6 py-6">
        <NoteForm workProperties={noteWorkProperties} />
      </div>
    </>
  )
}
export default SingleWorkPage;