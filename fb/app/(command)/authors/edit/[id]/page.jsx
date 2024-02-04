import EditAuthorForm from '@/components/EditAuthorForm';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';



const EditAuthor = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditAuthorForm />
      </HydrationBoundary>
    </>
  )
}
export default EditAuthor;