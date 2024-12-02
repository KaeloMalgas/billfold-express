import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminAddConsumer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with backend
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/admin/consumers")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Consumers
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-black">Add New Consumer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Consumer
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}