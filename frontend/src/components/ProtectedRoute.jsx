import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // remove broken values
  if (!token || token === "undefined" || token === "null") {
    return <Navigate to="/admin" replace state={{ from: location }} />;
  }

  return children;
}