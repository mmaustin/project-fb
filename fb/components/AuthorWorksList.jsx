import { getAuthorsWorks } from "@/utils/actions";
import Link from "next/link";
import WorkDelete from "./WorkDelete";

const AuthorWorksList = async ({ authorId, authorName }) => {
  let allRouteWorks;
  allRouteWorks = await getAuthorsWorks(authorId);

  if (allRouteWorks.length === 0) {
    return (
      <h2 className="mt-8 font-bold capitalize text-center">create some works, writer!</h2>
    )
  };

  const displayWorks = allRouteWorks.map(work => {
    let workID = work._id.toString();
    return <div key={work._id} className="w-full h-[220px] rounded-lg">
      <div className="card shadow-xl h-[220px] border-2 border-base-300">
        <div className="card-body">
          <h2 className="card-title text-base capitalize">{work.title}</h2>
          <p>{work.writingStage}</p>
          <div className="card-actions justify-center">
            <Link href={`/works/${work._id}`} className="btn btn-xs  rounded-lg" >
              Work Page
            </Link>
            <Link href={`/works/edit/${work._id}`} className="btn btn-xs  rounded-lg" >
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