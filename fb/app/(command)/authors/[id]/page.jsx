import WorkForm from "@/components/WorkForm";
import WorksList from "@/components/WorksList";
import Link from "next/link";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSingleAuthor } from "@/utils/actions";


const AuthorPage = async ({ params }) => {
  const queryClient = new QueryClient();
  const author = await getSingleAuthor(params.id);

  const retrievedAuthor = { aId: author._id.toString(), aAuthorName: author.authorName, aAboutMe: author.aboutMe, aAuthorInfluence: author.authorInfluence, aWorkInfluence: author.workInfluence, aAuthUser: author.authUser, aPublicProfile: author.publicProfile }


  const authorParamId = params.id;
  return (
    <div>
      <p>Author's Page</p>
      <HydrationBoundary state={dehydrate(queryClient)} >
        <WorkForm workAuthor={retrievedAuthor} />
      </HydrationBoundary>
      <WorksList authorId={authorParamId} authorName={author.authorName} />
    </div>
  )
}
export default AuthorPage;