import AuthorChart from "@/components/visualization/AuthorChart";
import { auth } from "@clerk/nextjs";

const AuthorStats = () => {

  const { userId } = auth();

  return (
    <AuthorChart authorId={userId} />
  )
}
export default AuthorStats