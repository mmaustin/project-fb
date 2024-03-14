import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";


const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-100 border-r-2 border-t-indigo-300 py-12 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  )
}
export default Sidebar;