import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, User, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ConsumerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-3xl font-bold text-black">Consumer Dashboard</h1>
        <Button variant="destructive">Logout</Button>
      </header>

      {/* Welcome Section */}
      <div className="p-6">
        <h2 className="text-4xl font-bold text-black mb-8">Welcome, Consumer</h2>

        {/* Last Bill Summary Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-black">Last Bill Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-medium">Amount Due: </span>
                <span className="text-black">$150.25</span>
              </p>
              <p className="text-lg">
                <span className="font-medium">Due Date: </span>
                <span className="text-black">2023-04-15</span>
              </p>
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => navigate("/bills")}
            >
              <FileText className="h-4 w-4" />
              View Full Bill
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full text-left flex items-center gap-2 mb-4"
              onClick={() => navigate("/bills")}
            >
              <FileText className="h-4 w-4" />
              View All Bills
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/qr-scanner")}
          >
            <QrCode className="h-5 w-5" />
            <span className="text-xs">Scan QR</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/bills")}
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs">View Bills</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1"
            onClick={() => navigate("/profile")}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Edit Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
}