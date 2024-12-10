import AuthorChart from "@/components/visualization/AuthorChart";
import { getChartStats } from "@/utils/actions";
import { auth } from "@clerk/nextjs";

const AuthorStats = async () => {

  const notesObj = await getChartStats();
  console.log(notesObj);


  const { userId } = auth();

  return (
    <div className="flex flex-wrap justify-center items-center w-96 h-auto shadow-2xl">
      <AuthorChart authorId={userId} />
    </div>
  )
}
export default AuthorStats;