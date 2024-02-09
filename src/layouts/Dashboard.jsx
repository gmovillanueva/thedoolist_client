import Navbar from '@features/Navbar/Navbar.jsx';
import Sidebar from '@features/Sidebar/Sidebar.jsx';

const Dashboard = () => {
  return (
    /* Drawer */
    <div className='flex size-full'>
      <Sidebar />
      {/* Content */}
      <div className='bg-lightPrimary size-full'>
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
