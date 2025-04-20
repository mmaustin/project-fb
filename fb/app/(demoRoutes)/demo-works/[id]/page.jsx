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
        <h2 className="text-lg sm:text-xl font-serif capitalize mb-4">{work.title}</h2>
        <p className="capitalize italic text-sm sm:text-lg font-serif mb-4">{work.synopsis}</p>
        <div className="mt-8 mb-4 w-full">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <DemoNoteForm workStringified={workToNoteForm} />
          </HydrationBoundary>
        </div>
        <div className="mt-8 mb-4 w-full text-center">
          <DemoNoteList workId={params.id} workTitle={work.title} />
        </div>
      </div>
    </div>
  )
}
export default DemoWorkPage;