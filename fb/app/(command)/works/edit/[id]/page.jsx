import EditWorkForm from "@/components/EditWorkForm";
import { getSingleWork } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const EditWork = async ({ params }) => {
  const work = await getSingleWork(params.id);

  const retrievedWork = { workId: work._id.toString(), workTitle: work.title, workSynopsis: work.synopsis, workGenre: work.genre, workAuthUser: work.authUser, workAuthorName: work.authorName, workWritingStage: work.writingStage, workCreatedBy: work.createdBy.toString(), };

  const queryClient = new QueryClient();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditWorkForm workToEdit={retrievedWork} />
      </HydrationBoundary>
    </>
  )
}
export default EditWork;