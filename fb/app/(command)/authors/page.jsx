import AuthorForm from "@/components/AuthorForm";
import AuthorList from "@/components/AuthorList";
import { auth, currentUser } from "@clerk/nextjs";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const ShowAuthors = async () => {
  const queryClient = new QueryClient();

  const { userId } = auth();
  //const user = await currentUser();
  //Both values remain the same after repeated logout/logins, good for createdBy model attributes
  //console.log(userId, user.primaryEmailAddressId);
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AuthorForm />
      </HydrationBoundary>
      <AuthorList />
    </>
    // <div className="max-w-lg">
    //   <AuthorForm />
    //   <AuthorList />
    // </div>
  )
}
export default ShowAuthors;