import { getAuthorsWorks } from "@/utils/actions";
import Link from "next/link";
import WorkDelete from "./WorkDelete";

const AuthorWorksList = async ({ authorId, authorName }) => {
  let allRouteWorks;
  allRouteWorks = await getAuthorsWorks(authorId);

  if (allRouteWorks.length === 0) {
    return (
      <h2 className="mt-8 font-bold capitalize text-center">You have yet to create a work.</h2>
    )
  };

  const displayWorks = allRouteWorks.map(work => {
    let workID = work._id.toString();
    let workAuthorId = work.createdBy.toString();
    return <div key={work._id} className=" w-full">
      <div className="card bg-neutral-400 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{work.title}</h2>
          <p>{work.writingStage}</p>
          <div className="card-actions justify-center">
            <Link href={`/works/${work._id}`} className="btn btn-accent btn-xs rounded-lg" >
              Work Page
            </Link>
            <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
              Edit Work
            </Link>
            <WorkDelete workId={workID} />
          </div>
        </div>
      </div>
    </div>
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start w-full">
      {displayWorks}
    </div>
  );
};
export default AuthorWorksList;