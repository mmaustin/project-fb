import { authUserCheck } from "@/utils/actions";
import AuthorDelete from "./AuthorDelete";
import Link from "next/link";


const UserHasAuthor = async ({ establishedAuthor }) => {
  //console.log(establishedAuthor);
  //Remember, this will only be one author in production, but i may have multiple author objects displayed for testing purposes.  DON'T CONFUSE MYSELF WITH THIS!!!

  const author = await authUserCheck(establishedAuthor);
  const authorID = author[0]?._id.toString();

  return (
    <div className="w-80 mx-8 md:w-80 flex flex-col justify-center items-start px-6 py-4 mb-4 border rounded-lg shadow-lg">
      <h4 className="text-md capitalize">
        {author[0]?.authorName}
      </h4>
      <h4 className="tooltip text-md capitalize text-info" data-tip={author[0]?.aboutMe}>
        <p>About Me</p>
      </h4>
      <h4 className="hidden md:block lg:block text-md capitalize">
        {author[0]?.authorInfluence}
      </h4>
      <h4 className="hidden md:block lg:block text-md capitalize">
        {author[0]?.workInfluence}
      </h4>
      {/* <h4 className="text-md capitalize">
          {author.publicProfile}
        </h4> */}
      <div className="">
        <Link href={`/authors/${author[0]?._id}`} className="btn btn-accent btn-xs rounded-lg" >
          Your Page
        </Link>
        <Link href={`/authors/edit/${author[0]?._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
          Edit Author
        </Link>
        <AuthorDelete authorId={authorID} />
      </div>
    </div>
  )
}
export default UserHasAuthor;