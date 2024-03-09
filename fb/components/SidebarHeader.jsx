import ThemeToggle from "./ThemeToggle";
import { FaLightbulb } from "react-icons/fa6";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <FaLightbulb className="w-6 h-6 " />
      <h2 className="text-xl font-extrabold mr-auto">Novel Ideas</h2>
      <ThemeToggle />
    </div>
  )
}
export default SidebarHeader;