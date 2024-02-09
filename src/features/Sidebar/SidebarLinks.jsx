import { Link, useLocation } from 'react-router-dom';

const SidebarLinks = (props) => {
  let location = useLocation();
  const { routes } = props;

  const currentRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLink = (routes) => {
    return routes.map((route, index) => {
      if (route.layout === '/admin' || route.layout === '/auth') {
        return (
          <Link
            key={index}
            to={route.layout + '/' + route.path}
          >
            <div className='relative mb-3 flex hover:cursor-pointer'>
              <li
                className='my-[3px] flex cursor-pointer items-center px-8'
                key={index}
              >
                <span
                  className={`${
                    currentRoute(route.path) === true
                      ? 'font-bold text-slate-200 dark:text-white'
                      : 'font-medium text-gray-600'
                  }`}
                >
                  {' '}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    currentRoute(route.path) === true
                      ? 'text-navy-700 font-bold dark:text-white'
                      : 'font-medium text-gray-600'
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {currentRoute(route.path) ? (
                <div className='bg-brand-500 dark:bg-brand-400 absolute right-0 top-px h-9 w-1 rounded-lg' />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };

  return createLink(routes);
};

export default SidebarLinks;
