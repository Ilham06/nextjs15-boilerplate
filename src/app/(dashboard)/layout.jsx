import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import React from "react";

export default function Layout({ children }) {
  return (
    // <ProtectedRoute> un coment to use protected route
      <DashboardLayout>{children}</DashboardLayout>
    // </ProtectedRoute>
  );
}
