import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProtectedRoute({ children }) {
  const { token } = useAuth()
  //console.log("activated")
  return token ? children : <Navigate to="/login" />
  return(<Outlet />)
}