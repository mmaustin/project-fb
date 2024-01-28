import AuthorForm from "@/components/AuthorForm";
import AuthorList from "@/components/AuthorList";
import { auth, currentUser } from "@clerk/nextjs";


const ShowAuthors = async () => {
  const { userId } = auth();
  const user = await currentUser();
  console.log(userId, user.primaryEmailAddressId);
  return (
    <div className="max-w-lg">
      <AuthorForm />
      <AuthorList />
    </div>
  )
}
export default ShowAuthors;