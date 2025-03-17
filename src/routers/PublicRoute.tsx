import { isAuthenticated } from "@/utils/auth.util";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
  const hasAuthenticated = isAuthenticated();

  if (hasAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
