import AuthorChart from "@/components/visualization/AuthorChart";
import { auth } from "@clerk/nextjs";

const AuthorStats = () => {

  const { userId } = auth();

  return (
    <div className="w-full">
      <AuthorChart authorId={userId} />
    </div>
  )
}
export default AuthorStats;