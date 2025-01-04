import AuthorChart from "@/components/visualization/AuthorChart";
import { auth } from "@clerk/nextjs";

const AuthorNotesChart = () => {

  const { userId } = auth();

  return (
    <div className="flex flex-wrap justify-center items-center w-[216px] sm:w-96 h-auto shadow-2xl">
      <AuthorChart authorId={userId} />
    </div>
  );
};
export default AuthorNotesChart;