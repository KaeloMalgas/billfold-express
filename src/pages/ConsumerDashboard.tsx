import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, QrCode, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConsumerDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome Back!</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Current Bill</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$123.45</div>
            <Button variant="outline" className="w-full mt-4">View Bill</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Meter Reading</CardTitle>
            <QrCode className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12345</div>
            <Button variant="outline" className="w-full mt-4">Upload Reading</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Last Payment</CardTitle>
            <CreditCard className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$98.76</div>
            <p className="text-xs text-muted-foreground mt-1">Paid on 2024-02-15</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}