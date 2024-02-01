import ThemeToggle from "./ThemeToggle";
import { FaLightbulb } from "react-icons/fa6";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <FaLightbulb className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto">Novel Ideas</h2>
      <ThemeToggle />
    </div>
  )
}
export default SidebarHeader;