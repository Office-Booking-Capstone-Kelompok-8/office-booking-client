import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Auth from '../utils/auth';

export default function PrivateRoute({ allowedRole }) {
  const auth = useSelector((state) => state.auth);
  if (Auth.isAuthorization() && auth.role === allowedRole) {
    return <Outlet />;
  }
  return <Navigate to="auth" replace />;
}
