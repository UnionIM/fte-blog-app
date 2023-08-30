import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes";

const AppRouter = () => {
  const { user } = useAppSelector((state) => state.user);
  return user.isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/sign-up" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="/posts/create" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
