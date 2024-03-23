import { getAuthorsWorks, getAllWorks } from "@/utils/actions";
import Link from "next/link";
import WorkDelete from "./WorkDelete";



const WorksList = async ({ authorId, authorName }) => {
  let allAuthorsWorks;

  if (authorId) {
    allAuthorsWorks = await getAuthorsWorks(authorId);
  } else {
    allAuthorsWorks = await getAllWorks();
  }

  if (allAuthorsWorks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">No One Is Writing!</h2>
    )
  };

  const displayWorks = allAuthorsWorks.map(work => {
    let workID = work._id.toString();
    return <div key={work._id} className="w-full mx-8 md:w-80 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg">
      <h4 className="text-lg capitalize">
        {work.title}
      </h4>
      <h4 className="text-lg capitalize">
        {work.genre}
      </h4>
      <h4 className="tooltip text-md capitalize text-info" data-tip={work.synopsis}>
        Synopsis
      </h4>
      {authorName !== work.authorName &&
        <h4 className="text-lg capitalize">
          {work.authorName}
        </h4>
      }
      <h4 className="text-lg capitalize">
        {work.writingStage}
      </h4>
      <div className="">
        <Link href={`/works/${work._id}`} className="btn btn-accent btn-xs rounded-lg" >
          Work Page
        </Link>
        <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
          Edit Work
        </Link>
        <WorkDelete workId={workID} />
      </div>
    </div>
  })

  //see NoteList component, have to iterate over allAuthorsWorks array outside of jsx in order to access the work._id.  Need to pass it as a prop to WorkDelete component.

  return (
    <div className="mt-2 w-96 flex justify-center">
      {displayWorks}
    </div>
  )
}
export default WorksList;