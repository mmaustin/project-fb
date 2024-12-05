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
    return <div key={work._id} className="grid grid-rows-1 gap-4 md:grid-rows-2 lg:grid-rows-3">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{work.title}</h2>
          <p>{work.synopsis}</p>
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
    // return <div key={work._id} className="carousel-item w-full mx-8  flex flex-col justify-center items-start rounded-lg shadow-lg">
    //   <h4 className="text-lg font-bold capitalize ml-2">
    //     {work.title}
    //   </h4>
    //   <h4 className="text-lg font-bold capitalize ml-2">
    //     {work.genre}
    //   </h4>
    //   <h4 className=" text-lg font-bold capitalize text-info ml-2">
    //     {work.synopsis}
    //   </h4>
    //   <h4 className="text-lg font-bold capitalize ml-2">
    //     {work.writingStage}
    //   </h4>
    //   <div className="mb-2 ml-2">
    //     <Link href={`/works/${work._id}`} className="btn btn-accent btn-xs rounded-lg" >
    //       Work Page
    //     </Link>
    //     <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
    //       Edit Work
    //     </Link>
    //     <WorkDelete workId={workID} />
    //   </div>
    //   {/* } */}
    // </div>
  })

  return (
    <>
      <div className="">
        {displayWorks}
      </div>
    </>
  )
}
export default AuthorWorksList;