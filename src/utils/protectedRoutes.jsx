import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProtectedRoute() {
  const { token } = useAuth()
  //console.log("activated")
  return token ? <Outlet /> : <Navigate to="/dv1677-ht26-grupp3-frontend/login" />
}