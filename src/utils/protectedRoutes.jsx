import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProtectedRoute(/*{ children }*/) {
  const { token } = useAuth()
  //console.log("activated")
  return token ? /*children*/<Outlet /> : <Navigate to="/dv1677-ht26-grupp3-frontend/login" />
  //return(<Outlet />)
  /*if (!token) {
    return (<Navigate to="/login" />)
  }
  return(<Outlet />)*/
}