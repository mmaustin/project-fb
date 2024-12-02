import { auth } from "@clerk/nextjs";


const AuthorsWorksPage = () => {
  const { userId } = auth();
  console.log(userId);


  return (
    <div>AuthorsWorksPage</div>
  )
}
export default AuthorsWorksPage;