import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../ui/";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* Journal App */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
