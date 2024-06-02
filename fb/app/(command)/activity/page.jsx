import { auth } from "@clerk/nextjs";

const AuthorActivityPage = () => {

  const { userId } = auth();
  console.log(userId);

  return (
    <div>Author Activity Page</div>
  )
}
export default AuthorActivityPage