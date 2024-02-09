import Dashboard from '@/layouts/Dashboard.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Authentication from '@/layouts/Authentication.jsx';

function App() {
  return (
    <Routes>
      <Route
        path='admin/*'
        element={<Dashboard />}
      />
      <Route
        path='auth/*'
        element={<Authentication />}
      />
      <Route
        path='/'
        element={
          <Navigate
            to='/admin'
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;
