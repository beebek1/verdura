import { Navigate } from "react-router-dom";
import getUserRole from "./authRole";
 
const ProtectedRoute = ({ element, allowedRoles }) => {
  const role = getUserRole();
 
  if (!role || !allowedRoles.includes(role)) {
    localStorage.removeItem("token");
    return <Navigate to="/signin" replace />;
  }
 
  return element;
};
 
export default ProtectedRoute;