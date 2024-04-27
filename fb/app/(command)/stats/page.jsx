import AuthorChart from "@/components/visualization/AuthorChart";
import { auth } from "@clerk/nextjs";

const AuthorStats = () => {

  const { userId } = auth();

  return (
    <div className="flex flex-wrap justify-center items-center w-96 h-96 shadow-2xl">
      <AuthorChart authorId={userId} />
    </div>
  )
}
export default AuthorStats;