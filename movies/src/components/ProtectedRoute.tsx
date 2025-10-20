import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import type { JSX } from "react";

type ProtectedRouteProps = {
  children: JSX.Element;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p style={{ color: 'white' }}>Yükleniyor...</p>;
  if (!user) return <Navigate to="/giris" />; // Giriş yoksa login sayfasına yönlendir

  return children;
}

export default ProtectedRoute;
