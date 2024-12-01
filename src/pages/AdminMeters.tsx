import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Edit, Trash, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminMeters() {
  const navigate = useNavigate();

  // Mock data - replace with actual data from backend
  const meters = [
    { id: "M001", location: "123 Main St", consumer: "John Doe" },
    { id: "M002", location: "456 Oak Ave", consumer: "Jane Smith" },
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

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Manage Meters</h1>
        <Button onClick={() => navigate("/admin/add-meter")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Meter
        </Button>
      </div>

      <div className="space-y-4">
        {meters.map((meter) => (
          <Card key={meter.id}>
            <CardHeader>
              <CardTitle className="text-lg text-black">
                Meter #{meter.id}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Location: {meter.location}</p>
                  <p className="text-sm text-gray-600">Consumer: {meter.consumer}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
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