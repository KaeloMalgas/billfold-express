import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Settings, User, FileText, Home } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
        <Button variant="destructive">Logout</Button>
      </header>

      {/* Welcome Section */}
      <div className="p-6">
        <h2 className="text-4xl font-bold text-black mb-8">Welcome, Admin</h2>

        {/* Recent Activity Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-black">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">No recent activity to display.</p>
          </CardContent>
        </Card>

        {/* Quick Actions Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
              >
                <User className="h-5 w-5" />
                <span>Add Customer</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
              >
                <Settings className="h-5 w-5" />
                <span>Add Meter</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
              >
                <Settings className="h-5 w-5" />
                <span>Manage Meters</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 p-6 text-left h-auto"
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
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            <span className="text-xs">Consumers</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <FileText className="h-5 w-5" />
            <span className="text-xs">Bills</span>
          </Button>
        </div>
      </div>
    </div>
  );
}