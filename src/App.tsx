import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import QRScanner from "./pages/QRScanner";
import Bills from "./pages/Bills";
import Profile from "./pages/Profile";
import { useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

function ProtectedRoute({ 
  children, 
  allowedRole 
}: { 
  children: React.ReactNode;
  allowedRole?: "admin" | "consumer";
}) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to={user?.role === "admin" ? "/admin" : "/dashboard"} />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="consumer">
            <ConsumerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/qr-scanner"
        element={
          <ProtectedRoute allowedRole="consumer">
            <QRScanner />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bills"
        element={
          <ProtectedRoute allowedRole="consumer">
            <Bills />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRole="consumer">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;