import { getAuthors } from "@/utils/actions";
import Link from "next/link";
import AuthorDelete from "./AuthorDelete";
//import { connectToDB } from "@/utils/database";

const AuthorList = async () => {

  const allAuthors = await getAuthors();

  if (allAuthors.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">No authors are writing . . . </h2>
    )
  };

  const authorsList = allAuthors.map(author => {
    let authorID = author._id.toString();
    return <div key={author._id} className="lg:w-3/6 flex-col justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lf shadow-lg">
      <h4 className="text-lg capitalize">
        {author.authorName}
      </h4>
      <h4 className="text-lg capitalize">
        {author.aboutMe.slice(0, 10)} . . .
      </h4>
      <h4 className="text-lg capitalize">
        {author.authorInfluence}
      </h4>
      <h4 className="text-lg capitalize">
        {author.workInfluence}
      </h4>
      <h4 className="text-lg capitalize">
        {author.publicProfile}
      </h4>
      <Link href={`/authors/${author._id}`} className="btn btn-accent btn-xs" >
        Your Page
      </Link>
      <Link href={`/authors/edit/${author._id}`} className="btn btn-accent btn-xs" >
        Edit Author
      </Link>
      <AuthorDelete authorId={authorID} />
    </div>
  })

  return (
    <div className="mt-8 w-full flex justify-center">
      {authorsList}
    </div>
  )
}
export default AuthorList