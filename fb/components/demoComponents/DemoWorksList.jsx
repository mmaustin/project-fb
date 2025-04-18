
import { getDemoWorks } from "@/utils/demoActions";
import Link from "next/link";
import DemoWorkDelete from "./DemoWorkDelete";

const DemoWorksList = async ({ authorName }) => {
  let allWorks;

  allWorks = await getDemoWorks();

  if (allWorks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg capitalize">there are no works to display!</h2>
    )
  };

  const displayWorks = allWorks.reverse().map((work, i) => {
    let workID = work._id.toString();

    return <div key={work._id} className=" w-full h-[220px] rounded-lg">
      <div className="card shadow-xl h-[220px] border-2 border-base-300">
        <div className="card-body">
          <p className="card-title text-base capitalize">{work.title}</p>
          <p>{work.writingStage}</p>
          <div className="card-actions justify-center">
            <Link href={`/demo-works/${work._id}`} className="btn btn-xs  rounded-lg" >
              Work Page
            </Link>
            <DemoWorkDelete workId={workID} />
          </div>
        </div>
      </div>
    </div>
  });

  return (

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start w-full">
      {displayWorks}
    </div>

  )
}
export default DemoWorksList;