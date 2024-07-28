import { getAuthors } from "@/utils/actions";
import Link from "next/link";
import AuthorDelete from "./AuthorDelete";
import { auth } from "@clerk/nextjs";


const AuthorList = async () => {
  const { userId } = auth();
  const allAuthors = await getAuthors();

  if (allAuthors.length === 0) {
    return (
      <h2 className="mt-8 font-bold text-blue text-lg text-center">No authors are writing . . . </h2>
    )
  };

  const authorsList = allAuthors.map((author, i) => {
    if (author.publicProfile === "Public") {
      let authorID = author._id.toString();
      return <div key={author._id} className="carousel-item w-full mx-8 flex flex-col justify-center items-start rounded-lg shadow-lg mt-2">
        <h6 className="ml-2 font-bold text-blue text-lg">{`${i + 1} of ${allAuthors.length}`}</h6>
        <h4 className="text-lg font-bold capitalize ml-2 tooltip tooltip-right" data-tip="Name">
          {author.authorName}
        </h4>
        <h4 className="text-sm md:text-md capitalize text-info ml-2 tooltip" data-tip="Moto">
          {author.aboutMe}
        </h4>
        <h4 className="text-md capitalize ml-2 tooltip tooltip-right font-bold" data-tip="Biggest Influence">
          {author.authorInfluence}
        </h4>
        <h4 className="text-md capitalize ml-2 font-bold tooltip tooltip-right" data-tip="Influential Work">
          {author.workInfluence}
        </h4>
        {userId === author.authUser &&
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
  return (
    <div className="w-80 md:w-96 carousel rounded-box mt-4 mb-4 shadow-2xl">
      {authorsList}
    </div>
  )
}
export default AuthorList;