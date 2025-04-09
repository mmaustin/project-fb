
import { getDemoWorks } from "@/utils/demoActions";
// import Link from "next/link";
// import WorkDelete from "./WorkDelete";

const DemoWorksList = async ({ authorName }) => {
  let allWorks;

  allWorks = await getDemoWorks();

  if (allWorks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">there are no works to display!</h2>
    )
  };

  const displayWorks = allWorks.map((work, i) => {
    let workID = work._id.toString();
    return <div key={work._id} className="border-2 border-base-300 w-full rounded-lg">
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{work.title}</h2>
          <p>{work.writingStage}</p>
          <div className="card-actions justify-center">
            <button type="" className="btn btn-xs rounded-lg ">Work Page</button>
            <button type="" className="btn btn-xs rounded-lg ">Edit Page</button>
            <button type="" className="btn btn-xs rounded-lg ">Delete Work</button>
            {/* <Link href={`/works/${work._id}`} className="btn btn-xs  rounded-lg" >
              Work Page
            </Link>
            <Link href={`/works/edit/${work._id}`} className="btn btn-xs  rounded-lg" >
              Edit Work
            </Link>
            <WorkDelete workId={workID} /> */}
          </div>
        </div>
      </div>
    </div>
  });

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start w-full">
        {displayWorks}
      </div>
    </>
  )
}
export default DemoWorksList;