import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
