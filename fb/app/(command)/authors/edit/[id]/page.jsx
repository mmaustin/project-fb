import EditAuthorForm from '@/components/EditAuthorForm';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';



const EditAuthor = ({ params }) => {
  const authorParamId = params.id;

  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditAuthorForm authorId={authorParamId} />
      </HydrationBoundary>
    </>
  )
}
export default EditAuthor;