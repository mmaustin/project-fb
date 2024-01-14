import { getAuthorsWorks, getAllWorks } from "@/utils/actions";
//import Link from "next/link";



const WorksList = async ({ authorId }) => {
  let allAuthorsWorks;

  if (authorId) {
    allAuthorsWorks = await getAuthorsWorks(authorId);
  } else {
    allAuthorsWorks = await getAllWorks();
  }

  if (allAuthorsWorks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">Author has created no works . . . </h2>
    )
  }

  return (
    <div className="mt-8">
      {allAuthorsWorks.map(work => {
        return <div key={work._id} className="flex-col justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lf shadow-lg">
          <h4 className="text-lg capitalize">
            {work.title}
          </h4>
          <h4 className="text-lg capitalize">
            {work.genre}
          </h4>
          <h4 className="text-lg capitalize">
            {work.synopsis}
          </h4>
          <h4 className="text-lg capitalize">
            {work.wordCount}
          </h4>
          {/* <Link href={`/authors/${author._id}`} className="btn btn-accent btn-xs" >
            Your Page
          </Link> */}
        </div>
      })}
    </div>
  )
}
export default WorksList;