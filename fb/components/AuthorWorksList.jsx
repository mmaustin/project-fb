import { getAuthorsWorks } from "@/utils/actions";
import Link from "next/link";
import WorkDelete from "./WorkDelete";

const AuthorWorksList = async ({ authorId, authorName }) => {
  let allRouteWorks;
  //This if else is to handle the two cases when I want to display all the works and the one case when I just want to display the author's works.
  // if (authorId) {
  allRouteWorks = await getAuthorsWorks(authorId);
  // } else if (authorIdAll) {
  //   allRouteWorks = await getAllWorks();
  // } else {
  //   allRouteWorks = await getAllWorks();
  // }

  if (allRouteWorks.length === 0) {
    return (
      <h2 className="mt-8 font-bold capitalize text-center">You have yet to create a work.</h2>
    )
  };

  const displayWorks = allRouteWorks.map(work => {
    let workID = work._id.toString();
    let workAuthorId = work.createdBy.toString();
    //console.log(workAuthorId);
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
      {/* {authorId === workAuthorId || authorIdAll === workAuthorId && */}
      <div className="mb-2 ml-2">
        <Link href={`/works/${work._id}`} className="btn btn-accent btn-xs rounded-lg" >
          Work Page
        </Link>
        <Link href={`/works/edit/${work._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
          Edit Work
        </Link>
        <WorkDelete workId={workID} />
      </div>
      {/* } */}
    </div>
  })

  return (
    <>
      <div className="carousel rounded-box w-80 md:w-96  mt-4 mb-4 shadow-2xl">
        {displayWorks}
      </div>
    </>
  )
}
export default AuthorWorksList;