import Dashboard from '@/layouts/Dashboard.jsx';
import SignIn from '@/views/SignIn.jsx';
import { House, SignIn as SignInIcon } from '@phosphor-icons/react';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'dashboard',
    icon: <House className='size-6' />,
    /*    component: <Dashboard />,*/
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'signin',
    icon: <SignInIcon className='size-6' />,
    component: <SignIn />,
  },
];

export default routes;
