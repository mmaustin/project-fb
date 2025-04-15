import DemoNoteForm from "@/components/demoComponents/DemoNoteForm";
import DemoNoteList from "@/components/demoComponents/DemoNoteList";
import { getDemoWork } from "@/utils/demoActions";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const DemoWorkPage = async ({ params }) => {

  const work = await getDemoWork(params.id);

  const queryClient = new QueryClient();

  const workToNoteForm = JSON.stringify(work);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center my-6">
        <p className="capitalize italic text-sm sm:text-lg font-serif mb-4">{work.synopsis}</p>
        <h2 className="text-lg sm:text-xl font-serif capitalize mb-4">{work.title}</h2>
        {/* <div className="flex flex-row justify-center items-center">
          <WorkDelete workId={workID} />
        </div> */}
        <div className="mt-8 mb-4 w-full">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <DemoNoteForm workStringified={workToNoteForm} />
          </HydrationBoundary>
        </div>
        <div className="mt-8 mb-4">
          <DemoNoteList workId={params.id} workTitle={work.title} />
        </div>
        {/* <div className="mt-6 text-xs text-error capitalize sm:hidden"><span className="text-error sm:hidden mr-2">*</span>do you really want to delete this!?</div> */}
      </div>
    </div>
  )
}
export default DemoWorkPage;