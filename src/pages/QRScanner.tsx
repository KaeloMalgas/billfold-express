import { useState } from "react";
import QrScanner from "react-qr-scanner";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function QRScanner() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [result, setResult] = useState("");

  const handleError = (err: any) => {
    toast({
      variant: "destructive",
      title: "Error scanning QR code",
      description: err.message
    });
  };

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      toast({
        title: "Reading uploaded successfully",
        description: "Your meter reading has been recorded."
      });
      // Simulate API call delay
      setTimeout(() => navigate("/dashboard"), 1500);
    }
  };

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
      
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-black">Scan Meter QR Code</h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <QrScanner
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
        {result && (
          <p className="text-sm text-gray-600">
            Last reading: {result}
          </p>
        )}
      </div>
    </div>
  );
}