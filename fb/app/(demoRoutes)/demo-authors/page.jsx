import DemoWorkForm from "@/components/demoComponents/DemoWorkForm";
import { getSingleDemoAuthor } from "@/utils/demoActions";
//import Link from "next/link";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const DemoAuthor = async () => {
  const queryClient = new QueryClient();
  const author = await getSingleDemoAuthor();

  const stringifiedAuthor = JSON.stringify(author);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HydrationBoundary state={dehydrate(queryClient)} >
        <DemoWorkForm demoAuthor={stringifiedAuthor} />
      </HydrationBoundary>
    </div>
  )
}
export default DemoAuthor;