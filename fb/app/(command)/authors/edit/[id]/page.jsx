import EditAuthorForm from '@/components/EditAuthorForm';
import { getSingleAuthor, getAuthors } from '@/utils/actions';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const EditAuthor = async ({ params }) => {
  const authorParamId = params.id;

  const author = await getSingleAuthor(authorParamId);
  //const authors = await getAuthors();
  const retrievedAuthor = { aId: authorParamId, aAuthorName: author.authorName, aAboutMe: author.aboutMe, aAuthorInfluence: author.authorInfluence, aWorkInfluence: author.workInfluence, aAuthUser: author.authUser, aPublicProfile: author.publicProfile }

  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditAuthorForm author={retrievedAuthor} />
      </HydrationBoundary>
    </>
  )
}
export default EditAuthor;