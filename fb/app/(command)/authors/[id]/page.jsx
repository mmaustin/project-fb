import WorkForm from "@/components/WorkForm";
import WorksList from "@/components/WorksList";
import Link from "next/link";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSingleAuthor } from "@/utils/actions";
import AuthorDelete from "@/components/AuthorDelete";


const AuthorPage = async ({ params }) => {
  const queryClient = new QueryClient();
  const author = await getSingleAuthor(params.id);

  const retrievedAuthor = { aId: author._id.toString(), aAuthorName: author.authorName, aAboutMe: author.aboutMe, aAuthorInfluence: author.authorInfluence, aWorkInfluence: author.workInfluence, aAuthUser: author.authUser, aPublicProfile: author.publicProfile };


  const authorParamId = params.id;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-lg font-bold underline ">{author.authorName}</p>
      <div className="mt-6 mb-6">
        <Link href={`/authors/edit/${author._id}`} className="btn btn-accent btn-xs border-x-base-100 rounded-lg" >
          Edit Author
        </Link>
        <AuthorDelete authorId={authorParamId} />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)} >
        <WorkForm workAuthor={retrievedAuthor} />
      </HydrationBoundary>
      <p className="capitalize mt-4 font-semibold underline">your works</p>
      <div className="w-80 md:w-96">
        <WorksList authorId={authorParamId} authorName={author.authorName} />
      </div>
    </div>
  )
}
export default AuthorPage;