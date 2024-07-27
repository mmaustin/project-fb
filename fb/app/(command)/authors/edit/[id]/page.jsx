import EditAuthorForm from '@/components/EditAuthorForm';
import { getSingleAuthor, getAuthors } from '@/utils/actions';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const EditAuthor = async ({ params }) => {
  const authorParamId = params.id;

  const author = await getSingleAuthor(authorParamId);
  const retrievedAuthor = { aId: authorParamId, aAuthorName: author.authorName, aAboutMe: author.aboutMe, aAuthorInfluence: author.authorInfluence, aWorkInfluence: author.workInfluence, aAuthUser: author.authUser, aPublicProfile: author.publicProfile }

  const queryClient = new QueryClient();

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditAuthorForm author={retrievedAuthor} />
      </HydrationBoundary>
    </div>
  )
}
export default EditAuthor;