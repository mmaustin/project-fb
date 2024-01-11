import { getAuthors } from "@/utils/actions";
import Link from "next/link";
//import { connectToDB } from "@/utils/database";

const AuthorList = async () => {

  const allAuthors = await getAuthors();

  if (allAuthors.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">No authors are writing . . . </h2>
    )
  }

  return (
    <div className="mt-8">
      {allAuthors.map(author => {
        return <div key={author._id} className="flex-col justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lf shadow-lg">
          <h4 className="text-lg capitalize">
            {author.name}
          </h4>
          <h4 className="text-lg capitalize">
            {author.style}
          </h4>
          <h4 className="text-lg capitalize">
            {author.authorInfluence}
          </h4>
          <h4 className="text-lg capitalize">
            {author.workInfluence}
          </h4>
          <Link href={`/authors/${author._id}`} className="btn btn-accent btn-xs" >
            Your Page
          </Link>
        </div>
      })}
    </div>
  )
}
export default AuthorList