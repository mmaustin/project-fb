import AuthorChart from "@/components/visualization/AuthorChart";
import { getChartStats } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const AuthorStats = async () => {

  const { userId } = auth();

  const notesObj = await getChartStats(userId);
  console.log(notesObj);

  if (!notesObj || notesObj.length < 1) return null;

  return (
    <section className='mt-16'>
      <h1 className='text-4xl font-semibold text-center'>
        Monthly Applications
      </h1>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={notesObj} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          {/* <Tooltip /> */}
          <Bar dataKey='count' fill='#2563eb' barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
    // <div className="flex flex-wrap justify-center items-center w-96 h-auto shadow-2xl">
    //   <AuthorChart authorId={userId} />
    // </div>
  )
}
export default AuthorStats;