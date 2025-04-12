import { getDemoChartStats } from "@/utils/demoActions"


const DemoStats = async () => {

  const stats = await getDemoChartStats();
  console.log(stats);


  return (
    <div>Demo Stats</div>
  )
}
export default DemoStats