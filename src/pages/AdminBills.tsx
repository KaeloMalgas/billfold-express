import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminBills() {
  const navigate = useNavigate();

  // Mock data - replace with actual data from backend
  const bills = [
    { 
      id: 1, 
      consumer: "John Doe",
      meterReading: "1234",
      amount: 150.25, 
      date: "2024-03-15", 
      status: "Pending Validation" 
    },
    { 
      id: 2, 
      consumer: "Jane Smith",
      meterReading: "5678",
      amount: 145.80, 
      date: "2024-02-15", 
      status: "Validated" 
    },
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

      <h1 className="text-2xl font-bold mb-6 text-black">Bills Management</h1>

      <div className="space-y-4">
        {bills.map((bill) => (
          <Card key={bill.id}>
            <CardHeader>
              <CardTitle className="text-lg text-black flex justify-between">
                <span>Bill #{bill.id}</span>
                <span className={bill.status === "Validated" ? "text-green-600" : "text-yellow-600"}>
                  {bill.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Consumer: {bill.consumer}</p>
                  <p className="text-sm text-gray-600">Meter Reading: {bill.meterReading}</p>
                  <p className="text-sm text-gray-600">Amount: ${bill.amount}</p>
                  <p className="text-sm text-gray-600">Date: {bill.date}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Validate
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
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