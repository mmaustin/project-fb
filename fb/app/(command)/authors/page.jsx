import AuthorForm from "@/components/AuthorForm";
import AuthorList from "@/components/AuthorList";
import UserHasAuthor from "@/components/UserHasAuthor";
import { authUserCheck } from "@/utils/actions";
import { auth, currentUser } from "@clerk/nextjs";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const ShowAuthors = async () => {
  const queryClient = new QueryClient();

  const { userId } = auth();
  // const authUser = await authUserCheck(userId);
  // //console.log(authUser);

  // if (authUser.length >= 1) {
  //   return (
  //     <UserHasAuthor establishedAuthor={userId} />
  //   )
  // };

  //const user = await currentUser();
  //Both values remain the same after repeated logout/logins, good for createdBy model attributes
  //console.log(userId, user.primaryEmailAddressId);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AuthorForm authUser={userId} />
      </HydrationBoundary>
      <AuthorList />
    </div>
    // <div className="max-w-lg">
    //   <AuthorForm />
    //   <AuthorList />
    // </div>
  )
}
export default ShowAuthors;