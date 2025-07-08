// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EcomContext } from "./context";

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(EcomContext);

  if (!login) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
