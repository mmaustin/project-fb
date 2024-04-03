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
  //carousel-item w-full mx-8 md:w-80 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg
  const authorsList = allAuthors.map((author, i) => {
    if (author.publicProfile === "Public") {
      let authorID = author._id.toString();
      return <div key={author._id} className="carousel-item w-full mx-8 flex flex-col justify-center items-start rounded-lg shadow-lg mt-2">
        <h6 className="ml-2 font-semibold underline">{`${i + 1} of ${allAuthors.length}`}</h6>
        <h4 className="text-md capitalize ml-2">
          {author.authorName}
        </h4>
        <h4 className="text-sm md:text-md capitalize text-info ml-2">
          {author.aboutMe}
        </h4>
        <h4 className="text-md capitalize ml-2">
          {author.authorInfluence}
        </h4>
        <h4 className="text-md capitalize ml-2">
          {author.workInfluence}
        </h4>
        {userId === author.authUser &&
          // remember, all of these will show up, because i'm the only user making author objects
          <div className="mb-2 ml-2">
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
  //mt-8 w-96 lg:w-full flex flex-wrap justify-center items-center md:flex-wrap
  return (
    <div className="w-80 md:w-96 carousel rounded-box mt-4 mb-4 shadow-2xl">
      {authorsList}
    </div>
  )
}
export default AuthorList;