import { isAuthenticated } from "@/utils/auth.util";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const hasAuthenticated = isAuthenticated();

  if (!hasAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
