import { useDrawerStore } from '@store/drawerStore.js';
import { useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside.jsx';
import { NavLink } from 'react-router-dom';
import SidebarLinks from '@features/Sidebar/SidebarLinks.jsx';
import routes from '@configs/routes.jsx';

const Sidebar = () => {
  const { toggleDrawer: toggleDrawer } = useDrawerStore();
  const { openDrawer: sidebarOpen } = useDrawerStore();
  const { closeDrawer: sidebarClose } = useDrawerStore();

  const buttonRef = useRef();
  const containerRef = useRef();
  useOnClickOutside(containerRef, () => sidebarClose());

  return (
    <div id='sidebar_container'>
      {/* Sidebar Backdrop */}
      <div
        id='sidebar_mobile_backdrop'
        ref={containerRef}
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden='true'
      />

      {/* Sidebar */}
      <div
        id='sidebar'
        className={`no-scrollbar lg:sidebar-expanded:!w-64 absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll bg-slate-800 p-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto 2xl:!w-64 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/*Sidebar Header */}
        <div className='mb-10 flex justify-between pr-3 sm:px-2'>
          {/* Close button */}
          <button
            ref={buttonRef}
            className='text-slate-500 hover:text-slate-400 lg:hidden'
            onClick={toggleDrawer}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg
              className='size-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>

          {/* Title */}
          <p>
            <span>TheDoo</span> List
          </p>
          {/*          <NavLink
            end
            to='/'
            className='block'
          >
            <p>
              <span>TheDoo</span> List
            </p>
          </NavLink>*/}

          {/* Sidebar Links */}
          <ul>
            <SidebarLinks routes={routes} />
          </ul>

          {/* Expand / collapse button */}
          {/*<div className='mt-auto hidden justify-end pt-3 lg:inline-flex 2xl:hidden'>
            <div className='px-3 py-2'>
              <button onClick={() => toggleDrawer}>
                <span className='sr-only'>Expand / collapse sidebar</span>
                <svg
                  className='sidebar-expanded:rotate-180 size-6 fill-current'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='text-slate-400'
                    d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z'
                  />
                  <path
                    className='text-slate-600'
                    d='M3 23H1V1h2z'
                  />
                </svg>
              </button>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
