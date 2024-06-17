import { FC } from 'react'
import { ProtectedRouteProps } from '../@types/ProtectedRoute'
import { useAuth } from '../AuthProvider'
import { Navigate, Route } from 'react-router-dom'


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
    const { isAuthenticate } = useAuth();
  
    return (
      <Route path={path} element={isAuthenticate ? element : <Navigate to="/" />} />
    );
  };
  export default ProtectedRoute;