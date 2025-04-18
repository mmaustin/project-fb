import DemoBarChartContainer from "@/components/demoComponents/DemoBarChartContainer";
import { getDemoChartStats } from "@/utils/demoActions";

const DemoStats = async () => {

  const notes = await getDemoChartStats();

  return (
    <div className="w-full">
      <DemoBarChartContainer allNotes={notes} />
    </div>
  )
}
export default DemoStats;