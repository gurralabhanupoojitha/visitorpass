import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RequireAuth({ children }) {
  const { token, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;
  if (!token) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}