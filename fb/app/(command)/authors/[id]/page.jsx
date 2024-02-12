import WorkForm from "@/components/WorkForm";
import WorksList from "@/components/WorksList";
import Link from "next/link";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const AuthorPage = ({ params }) => {
  const queryClient = new QueryClient();

  const authorParamId = params.id;
  return (
    <div>
      <p>Author's Page</p>
      <HydrationBoundary state={dehydrate(queryClient)} >
        <WorkForm authorId={authorParamId} />
      </HydrationBoundary>
      <WorksList authorId={authorParamId} />
    </div>
  )
}
export default AuthorPage;