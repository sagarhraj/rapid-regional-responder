import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Calendar, Clock3, MapPin, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HistoryPage = () => {
  const navigate = useNavigate();
  
  const responseHistory = [
    { 
      id: 1,
      type: "Medical",
      subType: "Cardiac Arrest",
      date: "May 10, 2023",
      time: "14:32",
      location: "KTJ Nagar, Davangere",
      status: "Responded",
      tokens: 50,
      tokenStatus: "Earned"
    },
    { 
      id: 2,
      type: "Medical",
      subType: "Trauma/Injury",
      date: "April 22, 2023",
      time: "09:15",
      location: "P.J. Extension, Davangere",
      status: "Responded",
      tokens: 150,
      tokenStatus: "Earned"
    },
    { 
      id: 3,
      type: "Fire",
      subType: "Building Fire",
      date: "March 5, 2023",
      time: "18:45",
      location: "Vinayaka Circle, Davangere",
      status: "Responded",
      tokens: 100,
      tokenStatus: "Earned"
    },
  ];
  
  const reportHistory = [
    { 
      id: 1,
      type: "Medical",
      subType: "Unconscious Person",
      date: "February 15, 2023",
      time: "21:20",
      location: "MCC B Block, Davangere",
      status: "Resolved",
      tokens: 75,
      tokenStatus: "Earned"
    },
    { 
      id: 2,
      type: "Other",
      subType: "Trapped Person",
      date: "January 3, 2023",
      time: "16:05",
      location: "Bharath Nagar, Davangere",
      status: "Resolved",
      tokens: 60,
      tokenStatus: "Earned"
    },
  ];
  
  return (
    <PageContainer>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            History
          </h1>
          <p className="text-muted-foreground text-lg mt-1">Your emergency response activities</p>
        </div>
        <Button 
          className="mt-4 md:mt-0 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 flex items-center gap-2"
          onClick={() => navigate('/tokens')}
        >
          <Coins className="h-4 w-4" />
          <span>View Token Wallet</span>
        </Button>
      </div>
      
      <Tabs defaultValue="responses" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-6 p-1 bg-secondary/50">
          <TabsTrigger 
            value="responses" 
            className="text-base py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all"
          >
            My Responses
          </TabsTrigger>
          <TabsTrigger 
            value="reports"
            className="text-base py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all"
          >
            My Reports
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="responses" className="space-y-4">
          {responseHistory.length === 0 ? (
            <div className="text-center p-8 bg-secondary/30 rounded-lg">
              <Clock3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">You haven't responded to any emergencies yet.</p>
            </div>
          ) : (
            responseHistory.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        item.type === "Medical" ? "bg-red-100" : 
                        item.type === "Fire" ? "bg-orange-100" : 
                        "bg-blue-100"
                      }`}>
                        <AlertCircle className={`h-5 w-5 ${
                          item.type === "Medical" ? "text-red-600" : 
                          item.type === "Fire" ? "text-orange-600" : 
                          "text-blue-600"
                        }`} />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{item.type}</span>
                        <h3 className="font-semibold text-lg -mt-1">{item.subType}</h3>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      {item.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <Clock3 className="h-4 w-4 mr-2" />
                      <span>{item.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center mt-2 pt-2 border-t border-dashed border-amber-200">
                      <Coins className="h-4 w-4 mr-2 text-amber-600" />
                      <span className="font-medium text-amber-700">+{item.tokens} tokens</span>
                      <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
                        {item.tokenStatus}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          {reportHistory.length === 0 ? (
            <div className="text-center p-8 bg-secondary/30 rounded-lg">
              <Clock3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">You haven't reported any emergencies yet.</p>
            </div>
          ) : (
            reportHistory.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        item.type === "Medical" ? "bg-red-100" : "bg-blue-100"
                      }`}>
                        <AlertCircle className={`h-5 w-5 ${
                          item.type === "Medical" ? "text-red-600" : "text-blue-600"
                        }`} />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{item.type}</span>
                        <h3 className="font-semibold text-lg -mt-1">{item.subType}</h3>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {item.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <Clock3 className="h-4 w-4 mr-2" />
                      <span>{item.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center mt-2 pt-2 border-t border-dashed border-amber-200">
                      <Coins className="h-4 w-4 mr-2 text-amber-600" />
                      <span className="font-medium text-amber-700">+{item.tokens} tokens</span>
                      <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
                        {item.tokenStatus}
                      </Badge>
                    </div>
                  </div>
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
