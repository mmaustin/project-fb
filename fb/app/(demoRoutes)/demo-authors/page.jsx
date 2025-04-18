import DemoWorkForm from "@/components/demoComponents/DemoWorkForm";
import DemoWorksList from "@/components/demoComponents/DemoWorksList";
import { getSingleDemoAuthor } from "@/utils/demoActions";
//import Link from "next/link";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const DemoAuthor = async () => {
  const queryClient = new QueryClient();
  const author = await getSingleDemoAuthor();

  const stringifiedAuthor = JSON.stringify(author);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-lg font-serif">{author.authorName}</p>
      <HydrationBoundary state={dehydrate(queryClient)} >
        <DemoWorkForm demoAuthor={stringifiedAuthor} />
      </HydrationBoundary>
      <p className="mt-4 font-serif capitalize text-lg">your works</p>
      <div className="mt-4 w-full">
        <DemoWorksList />
      </div>
    </div>
  )
}
export default DemoAuthor;