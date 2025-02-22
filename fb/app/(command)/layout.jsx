import Sidebar from "@/components/Sidebar";
import { FaBarsStaggered } from 'react-icons/fa6';

const layout = ({ children }) => {
  return (
    <div className="drawer md:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className="drawer-button md:hidden fixed top-6 right-6">
          <FaBarsStaggered className="w-6 h-6 text-primary" />
        </label>
        <div className="bg-base-100 flex flex-col justify-center items-center px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default layout;