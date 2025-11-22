import { Outlet } from "react-router-dom";
import Header from "@/components/Header"; // استدعاء الهيدر

export default function AdminLayout() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
