
import { getAuthorsWorks, getAllWorks } from "@/utils/actions";
import Link from "next/link";
import WorkDelete from "./WorkDelete";

const WorksList = async ({ authorId, authorName }) => {
  let allRouteWorks;

  allRouteWorks = await getAllWorks();

  if (allRouteWorks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">there are no works to display.</h2>
    )
  };

  let allRouteWorksLength = allRouteWorks.length;

  const displayWorks = allRouteWorks.map((work, i) => {
    let workID = work._id.toString();
    let workAuthorId = work.createdBy.toString();
    //console.log(workAuthorId);
    return <div key={work._id} className="carousel-item w-full mx-8  flex flex-col justify-center items-start rounded-lg shadow-lg">
      <h5 className="ml-2 text-info mb-4">{i + 1} of {allRouteWorksLength}</h5>
      {authorName !== work.authorName &&
        <h4 className="text-md capitalize ml-2">
          {work.authorName}
        </h4>
      }
      <h4 className="text-md capitalize ml-2">
        {work.title}
      </h4>
      <h4 className="text-md capitalize ml-2">
        {work.genre}
      </h4>
      <h4 className="text-md capitalize ml-2 mb-2">
        {work.writingStage}
      </h4>
      <h4 className=" text-md text-info capitalize ml-2">
        {work.synopsis}
      </h4>
      {authorId === workAuthorId &&
        <div className="my-2 ml-2">
          <Link href={`/works/${work._id}`} className="btn btn-accent btn-xs rounded-lg" >
            Work Page
          </Link>
          <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
            Edit Work
          </Link>
          <WorkDelete workId={workID} />
        </div>
      }
    </div>
  })

  return (
    <>
      <div className="carousel rounded-box mt-4 mb-4">
        {displayWorks}
      </div>
    </>
  )
}
export default WorksList;