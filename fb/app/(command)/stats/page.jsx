import AuthorChart from "@/components/visualization/AuthorChart";
import { auth } from "@clerk/nextjs";

const AuthorStats = () => {

  const { userId } = auth();
  console.log(userId);

  return (
    <AuthorChart />
  )
}
export default AuthorStats