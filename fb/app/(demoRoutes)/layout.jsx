import DemoSidebar from '@/components/demoComponents/DemoSidebar';
import { FaBarsStaggered } from 'react-icons/fa6';

const layout = ({ children }) => {
  return (
    <div className="drawer md:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className="drawer-button md:hidden fixed top-6 right-6">
          <FaBarsStaggered className="w-6 h-6 text-primary" />
        </label>
        <div className="bg-base-100 flex flex-col justify-center items-center px-8 py-12 min-h-screen">
          <p className='m-0 capitalize text-[11px] mb-6 text-center font-serif italic'>auth, personalized profiles, full cRUD capabilities, and more upon sign in. delete and create here with abandon!</p>
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <DemoSidebar />
      </div>
    </div>
  );
};

export default layout;