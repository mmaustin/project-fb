import SidebarHeader from "../SidebarHeader";
import DemoNavLinks from "./DemoNavLinks";

const DemoSidebar = () => {
  return (
    <div className="px-4 w-72 min-h-[50%] sm:min-h-full bg-base-100 border-r-2 border-dotted py-12 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <DemoNavLinks />
    </div>
  )
}
export default DemoSidebar;