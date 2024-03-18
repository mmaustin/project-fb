import { getAuthors } from "@/utils/actions";
import Link from "next/link";
import AuthorDelete from "./AuthorDelete";
import { auth } from "@clerk/nextjs";
//import { connectToDB } from "@/utils/database";

const AuthorList = async () => {
  const { userId } = auth();

  const allAuthors = await getAuthors();

  if (allAuthors.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">No authors are writing . . . </h2>
    )
  };

  const authorsList = allAuthors.map(author => {
    if (author.publicProfile === "Public") {
      let authorID = author._id.toString();
      return <div key={author._id} className="w-full mx-8 md:w-80 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg">
        <h4 className="text-md capitalize">
          {author.authorName}
        </h4>
        <h4 className="tooltip text-md capitalize text-info" data-tip={author.aboutMe}>
          <p>About Me</p>
        </h4>
        <h4 className="hidden md:block lg:block text-md capitalize">
          {author.authorInfluence}
        </h4>
        <h4 className="hidden md:block lg:block text-md capitalize">
          {author.workInfluence}
        </h4>
        {userId === author.authUser &&
          // remember, all of these will show up, because i'm the only user making author objects
          <div className="">
            <Link href={`/authors/${author._id}`} className="btn btn-accent btn-xs rounded-lg" >
              Your Page
            </Link>
            <Link href={`/authors/edit/${author._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
              Edit Author
            </Link>
            <AuthorDelete authorId={authorID} />
          </div>
        }
      </div>
    }
  })

  return (
    <div className="mt-8 w-96 lg:w-full flex flex-wrap justify-center items-center md:flex-wrap ">
      {authorsList}
    </div>
  )
}
export default AuthorList