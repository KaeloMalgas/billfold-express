import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, UserMinus, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminConsumers() {
  const navigate = useNavigate();

  // Mock data - replace with actual data from backend
  const consumers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "disabled" },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/admin")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>

      <h1 className="text-2xl font-bold mb-6 text-black">Manage Consumers</h1>

      <div className="space-y-4">
        {consumers.map((consumer) => (
          <Card key={consumer.id}>
            <CardHeader>
              <CardTitle className="text-lg text-black flex justify-between">
                <span>{consumer.name}</span>
                <span className={consumer.status === "active" ? "text-green-600" : "text-red-600"}>
                  {consumer.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Email: {consumer.email}</p>
                  <p className="text-sm text-gray-600">ID: {consumer.id}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    <UserCog className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    <UserMinus className="h-4 w-4 mr-2" />
                    Disable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}