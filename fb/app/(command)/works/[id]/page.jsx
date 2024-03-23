import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";
import { getSingleWork } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Link from "next/link";

const SingleWorkPage = async ({ params }) => {
  const queryClient = new QueryClient();

  const work = await getSingleWork(params.id);

  const noteWorkProperties = { authUser: work.authUser, authorName: work.authorName, authorId: work.createdBy.toString(), workId: work._id.toString() };
  // console.log(noteWorkProperties);
  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <div key={work._id} className="w-full mx-8 md:w-80 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg">
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
      <div className="px-6 py-6 border border-base-300 rounded-lf shadow-lg" >
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NoteForm workProperties={noteWorkProperties} />
        </HydrationBoundary>
      </div>
      <div className="px-6 py-6 border border-base-300 rounded-lf shadow-lg" >
        <NoteList workId={params.id} />
      </div>
    </div>
  )
}
export default SingleWorkPage;