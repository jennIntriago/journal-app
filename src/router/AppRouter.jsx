import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FirebaseAuth } from "../firebase/config";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth);
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Journal App */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
