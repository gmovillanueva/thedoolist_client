import Dashboard from '@/layouts/Dashboard.jsx';
import SignIn from '@/views/SignIn.jsx';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'dashboard',
    /*    component: <Dashboard />,*/
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'signin',
    component: <SignIn />,
  },
];

export default routes;
