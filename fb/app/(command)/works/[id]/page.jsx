import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";
import WorkNotesChart from "@/components/visualization/WorkNotesChart";
import WorkDelete from "@/components/WorkDelete";
import { getSingleWork, getWorkNotes } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Link from "next/link";

const SingleWorkPage = async ({ params }) => {
  const queryClient = new QueryClient();

  const work = await getSingleWork(params.id);
  const workID = work._id.toString();

  const workNotes = await getWorkNotes(params.id);

  const noteContents = workNotes.map(note => {
    let noteCreatedAt = new Date(note.createdAt).toDateString()
    return { noteContent: note.content, noteCategory: note.category, noteAuthor: note.authorName, createdAt: noteCreatedAt };
  });

  const noteWorkProperties = { authUser: work.authUser, authorName: work.authorName, authorId: work.createdBy.toString(), workId: work._id.toString() };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center my-6">
        <p className="capitalize italic text-sm sm:text-lg font-serif mb-4">{work.synopsis}</p>
        <h2 className="text-lg sm:text-xl font-serif capitalize mb-4">{work.title}</h2>
        <div className="flex flex-row justify-center items-center">
          <Link href={`/works/edit/${work._id}`} className="btn btn-xs border-x-base-100 rounded-lg" >
            Edit Work
          </Link>
          <WorkDelete workId={workID} />
        </div>
        <div className="mt-8 mb-4 w-full">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteForm workProperties={noteWorkProperties} />
          </HydrationBoundary>
        </div>
        <div className="mt-8 mb-4 w-full text-center">
          <NoteList workId={params.id} workTitle={work.title} />
        </div>
        <div className="mt-6 text-xs text-error capitalize sm:hidden"><span className="text-error sm:hidden mr-2">*</span>do you really want to delete this!?</div>
      </div>
    </div>
  );
};
export default SingleWorkPage;