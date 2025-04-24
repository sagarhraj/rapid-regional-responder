
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

export const HistoryPage = () => {
  const responseHistory = [
    { 
      id: 1,
      type: "Medical",
      subType: "Cardiac Arrest",
      date: "May 10, 2023",
      time: "14:32",
      location: "Orchard Road, Singapore",
      status: "Responded"
    },
    { 
      id: 2,
      type: "Medical",
      subType: "Trauma/Injury",
      date: "April 22, 2023",
      time: "09:15",
      location: "Tampines Hub, Singapore",
      status: "Responded"
    },
    { 
      id: 3,
      type: "Fire",
      subType: "Building Fire",
      date: "March 5, 2023",
      time: "18:45",
      location: "Bishan Street 22, Singapore",
      status: "Responded"
    },
  ];
  
  const reportHistory = [
    { 
      id: 1,
      type: "Medical",
      subType: "Unconscious Person",
      date: "February 15, 2023",
      time: "21:20",
      location: "Jurong East MRT, Singapore",
      status: "Resolved"
    },
    { 
      id: 2,
      type: "Other",
      subType: "Trapped Person",
      date: "January 3, 2023",
      time: "16:05",
      location: "Sengkang West Road, Singapore",
      status: "Resolved"
    },
  ];
  
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">History</h1>
        <p className="text-muted-foreground">Your emergency response activities</p>
      </div>
      
      <Tabs defaultValue="responses">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="responses">My Responses</TabsTrigger>
          <TabsTrigger value="reports">My Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="responses" className="space-y-4">
          {responseHistory.length === 0 ? (
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">You haven't responded to any emergencies yet.</p>
            </div>
          ) : (
            responseHistory.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <AlertCircle className={`h-5 w-5 mr-2 ${item.type === "Medical" ? "text-primary" : "text-orange-500"}`} />
                      <span className="font-medium">{item.subType}</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {item.status}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-1">
                    <span>{item.date}</span>
                    <span className="mx-1">•</span>
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="text-sm">{item.location}</div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          {reportHistory.length === 0 ? (
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">You haven't reported any emergencies yet.</p>
            </div>
          ) : (
            reportHistory.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <AlertCircle className={`h-5 w-5 mr-2 ${item.type === "Medical" ? "text-primary" : "text-orange-500"}`} />
                      <span className="font-medium">{item.subType}</span>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {item.status}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-1">
                    <span>{item.date}</span>
                    <span className="mx-1">•</span>
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="text-sm">{item.location}</div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default HistoryPage;
