
import { getAuthorsWorks, getAllWorks, getSingleAuthor } from "@/utils/actions";
import Link from "next/link";
import WorkDelete from "./WorkDelete";

const WorksList = async ({ authorId, authorName }) => {
  let allRouteWorks;

  if (authorId) {
    allRouteWorks = await getAuthorsWorks(authorId);
  } else {
    allRouteWorks = await getAllWorks();
  }

  if (allRouteWorks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">unfortunately, there are no works to display.</h2>
    )
  };

  const displayWorks = allRouteWorks.map(work => {
    let workID = work._id.toString();
    return <div key={work._id} className="carousel-item w-full mx-8  flex flex-col justify-center items-start rounded-lg shadow-lg">
      <h4 className="text-md capitalize ml-2">
        {work.title}
      </h4>
      <h4 className="text-md capitalize ml-2">
        {work.genre}
      </h4>
      <h4 className=" text-md capitalize text-info ml-2">
        {work.synopsis}
      </h4>
      {authorName !== work.authorName &&
        <h4 className="text-md capitalize ml-2">
          {work.authorName}
        </h4>
      }
      <h4 className="text-md capitalize ml-2">
        {work.writingStage}
      </h4>
      <div className="mb-2 ml-2">
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

  return (
    <>
      {!authorId &&
        <p className="text-lg uppercase font-bold">
          scroll the works
        </p>
      }
      <div className="carousel rounded-box  mt-4 mb-4 shadow-2xl">
        {displayWorks}
      </div>
    </>
  )
}
export default WorksList;