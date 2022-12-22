import { Navigate, Outlet } from 'react-router-dom';
import Auth from '../utils/auth';

export default function PrivateRoute() {
  if (Auth.isAuthorization()) {
    return <Outlet />;
  }
  return <Navigate to="auth" replace />;
}
