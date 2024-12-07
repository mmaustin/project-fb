import WorkForm from "@/components/WorkForm";
import Link from "next/link";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSingleAuthor } from "@/utils/actions";
import AuthorDelete from "@/components/AuthorDelete";
import AuthorWorksList from "@/components/AuthorWorksList";


const AuthorPage = async ({ params }) => {
  const queryClient = new QueryClient();
  const author = await getSingleAuthor(params.id);

  const retrievedAuthor = { aId: author._id.toString(), aAuthorName: author.authorName, aAboutMe: author.aboutMe, aAuthorInfluence: author.authorInfluence, aWorkInfluence: author.workInfluence, aAuthUser: author.authUser, aPublicProfile: author.publicProfile };

  const firstName = retrievedAuthor.aAuthorName.split(' ')[0];

  const authorParamId = params.id;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-lg font-bold">{author.authorName}</p>
      <div className="mt-6 mb-6">
        <Link href={`/authors/edit/${author._id}`} className="btn btn-xs rounded-lg" >
          Edit Profile
        </Link>
        <AuthorDelete authorId={authorParamId} />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)} >
        <WorkForm workAuthor={retrievedAuthor} />
      </HydrationBoundary>
      <p className="mt-4 font-bold capitalize text-lg">your works</p>
      <div className="mt-4">
        <AuthorWorksList authorId={authorParamId} authorName={author.authorName} />
      </div>
    </div>
  )
}
export default AuthorPage;