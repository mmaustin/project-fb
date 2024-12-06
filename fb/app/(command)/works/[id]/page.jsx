import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";
import WorkNotesChart from "@/components/visualization/WorkNotesChart";
import { getSingleWork, getWorkNotes } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Link from "next/link";

const SingleWorkPage = async ({ params }) => {
  const queryClient = new QueryClient();

  const work = await getSingleWork(params.id);

  const workNotes = await getWorkNotes(params.id);

  const noteContents = workNotes.map(note => {
    let noteCreatedAt = new Date(note.createdAt).toDateString()
    return { noteContent: note.content, noteCategory: note.category, noteAuthor: note.authorName, createdAt: noteCreatedAt };
  });

  const noteWorkProperties = { authUser: work.authUser, authorName: work.authorName, authorId: work.createdBy.toString(), workId: work._id.toString() };

  // <div className="card bg-base-100 w-96 shadow-xl">
  //   <figure>
  //     <img
  //       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  //       alt="Shoes" />
  //   </figure>
  //   <div className="card-body">
  //     <h2 className="card-title">Shoes!</h2>
  //     <p>If a dog chews shoes whose shoes does he choose?</p>
  //     <div className="card-actions justify-end">
  //       <button className="btn btn-primary">Buy Now</button>
  //     </div>
  //   </div>
  // </div>

  return (
    <div className="grid gap-4 md:grid-cols-2 items-start w-full border border-red">
      {/* <div className="w-full flex flex-col justify-center items-center"> */}
      <div key={work._id} className="card bg-base-400 w-full shadow-xl border border-green">
        <div className="">{work.synopsis}</div>
        <div className="card-body">
          <h2 className="card-title">
            {work.title}
          </h2>
          <p>{work.writingStage}</p>
          <div className="card-actions justify-center">
            <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
              Edit Work
            </Link>
          </div>
        </div>
        {/* <h4 className="text-lg capitalize font-bold text-blue">
          {work.title}
        </h4>
        <h4 className="text-lg capitalize font-bold">
          {work.authorName}
        </h4>
        <h4 className="text-lg font-bold capitalize">
          {work.genre}
        </h4>
        <h4 className="text-md capitalize font-bold text-blue">
          {work.synopsis}
        </h4>
        <h4 className="text-lg font-bold">
          {work.writingStage}
        </h4>
        <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs join-item rounded-lg" >
          Edit Work
        </Link> */}
      </div>
      <div className="w-80 mx-8 md:w-96 flex flex-col justify-center items-start px-6 py-4 mb-4 rounded-lg shadow-lg" >
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NoteForm workProperties={noteWorkProperties} />
        </HydrationBoundary>
      </div>
      {/* <p className="capitalize my-4 font-bold text-blue">{work.title} Notes' Hub</p> */}
      {/* <div className="w-80 md:w-full flex flex-col md:flex-row justify-around items-center"> */}
      <div className="" >
        <NoteList workId={params.id} workTitle={work.title} />
      </div>
      <div className="">
        <WorkNotesChart notesToChart={noteContents} />
      </div>
      {/* </div> */}
    </div>
  );
};
export default SingleWorkPage;