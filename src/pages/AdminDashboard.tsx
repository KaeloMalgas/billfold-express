import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  Users, Settings, User, FileText, Home, 
  UserPlus, Database, QrCode, LogOut 
} from "lucide-react";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
        <Button variant="destructive" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </header>

      {/* Welcome Section */}
      <div className="p-6">
        <h2 className="text-4xl font-bold text-black mb-8">Welcome, Admin</h2>

        {/* Quick Actions Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
                onClick={() => navigate("/admin/consumers")}
              >
                <Users className="h-5 w-5" />
                <span>Manage Consumers</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
                onClick={() => navigate("/admin/add-consumer")}
              >
                <UserPlus className="h-5 w-5" />
                <span>Add Consumer</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
                onClick={() => navigate("/admin/meters")}
              >
                <Database className="h-5 w-5" />
                <span>Manage Meters</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
                onClick={() => navigate("/admin/bills")}
              >
                <FileText className="h-5 w-5" />
                <span>Generate Bills</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
                onClick={() => navigate("/admin/qr-codes")}
              >
                <QrCode className="h-5 w-5" />
                <span>QR Code Management</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
                onClick={() => navigate("/admin/profile")}
              >
                <User className="h-5 w-5" />
                <span>Edit Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/admin")}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/admin/consumers")}
          >
            <Users className="h-5 w-5" />
            <span className="text-xs">Consumers</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/admin/bills")}
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs">Bills</span>
          </Button>
        </div>
      </div>
    </div>
  );
}