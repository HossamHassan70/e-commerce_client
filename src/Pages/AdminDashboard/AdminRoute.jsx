import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  // لو حابة نعمل bypass مؤقت:
  const role = "admin"; // <- بدل ما نجيب من localStorage أو الباك

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
