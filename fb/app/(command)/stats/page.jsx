//import AuthorChart from "@/components/visualization/AuthorChart";
import BarChartContainer from "@/components/BarChartContainer";
import { getChartStats } from "@/utils/actions";
import { auth } from "@clerk/nextjs";


const AuthorStats = async () => {

  const { userId } = auth();

  const notesObj = await getChartStats(userId);
  //console.log(notesObj);

  return (
    <div className="w-full">
      <BarChartContainer notesObj={notesObj} />
    </div>
  );
};
export default AuthorStats;