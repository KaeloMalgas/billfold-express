import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Bills() {
  const navigate = useNavigate();
  
  const bills = [
    { id: 1, amount: 150.25, date: "2024-03-15", status: "Unpaid" },
    { id: 2, amount: 145.80, date: "2024-02-15", status: "Paid" },
    { id: 3, amount: 160.50, date: "2024-01-15", status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/dashboard")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>

      <h1 className="text-2xl font-bold mb-6 text-black">Your Bills</h1>

      <div className="space-y-4">
        {bills.map((bill) => (
          <Card key={bill.id}>
            <CardHeader>
              <CardTitle className="text-lg text-black flex justify-between">
                <span>Bill #{bill.id}</span>
                <span className={bill.status === "Paid" ? "text-green-600" : "text-red-600"}>
                  {bill.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Amount: ${bill.amount}</p>
                  <p className="text-sm text-gray-600">Due Date: {bill.date}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View
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