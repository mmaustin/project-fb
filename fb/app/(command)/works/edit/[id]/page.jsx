import EditWorkForm from "@/components/EditWorkForm";
import { getSingleWork } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const EditWork = async ({ params }) => {
  const work = await getSingleWork(params.id);

  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditWorkForm editWork={work} />
      </HydrationBoundary>
    </>
  )
}
export default EditWork;