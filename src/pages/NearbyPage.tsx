import { useState } from "react";
import { MapPin, Navigation, AlertCircle, Search } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Map } from "@/components/Map";

const mockCases = [
  { 
    id: 1, 
    type: "Medical", 
    subType: "Cardiac Arrest", 
    location: "Block 45, Sector 18, Noida", 
    distance: "1.2 km", 
    time: "2 mins ago",
    respondersNeeded: true
  },
  { 
    id: 2, 
    type: "Medical", 
    subType: "Unconscious Person", 
    location: "Connaught Place Metro Station, New Delhi", 
    distance: "2.5 km", 
    time: "5 mins ago",
    respondersNeeded: true
  },
  { 
    id: 3, 
    type: "Fire", 
    subType: "Small Fire", 
    location: "DLF Mall, Sector 38, Gurgaon", 
    distance: "3.8 km", 
    time: "10 mins ago",
    respondersNeeded: false
  },
];

export const NearbyPage = () => {
  const [activeTab, setActiveTab] = useState<"list" | "map">("list");

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Nearby Cases</h1>
        <p className="text-muted-foreground">Emergencies in your vicinity</p>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Input 
          placeholder="Search location..." 
          className="flex-1"
          startContent={<Search className="h-4 w-4 text-muted-foreground" />}
        />
        <Button size="icon" variant="outline">
          <Navigation className="h-4 w-4" />
        </Button>
      </div>

      <div className="bg-secondary rounded-lg p-2 flex mb-6">
        <Button 
          variant={activeTab === "list" ? "default" : "ghost"}
          className="flex-1"
          onClick={() => setActiveTab("list")}
        >
          List View
        </Button>
        <Button 
          variant={activeTab === "map" ? "default" : "ghost"}
          className="flex-1"
          onClick={() => setActiveTab("map")}
        >
          Map View
        </Button>
      </div>

      {activeTab === "list" ? (
        <div className="space-y-4">
          {mockCases.map(caseItem => (
            <Card key={caseItem.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <AlertCircle className={`h-5 w-5 mr-2 ${caseItem.type === "Medical" ? "text-primary" : "text-orange-500"}`} />
                    <CardTitle className="text-lg">{caseItem.subType}</CardTitle>
                  </div>
                  <Badge variant={caseItem.respondersNeeded ? "default" : "outline"}>
                    {caseItem.respondersNeeded ? "Needs Responders" : "Responders Sufficient"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start mb-2">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm">{caseItem.location}</p>
                    <div className="flex text-xs text-muted-foreground">
                      <span>{caseItem.distance}</span>
                      <span className="mx-2">•</span>
                      <span>{caseItem.time}</span>
                    </div>
                  </div>
                </div>
                {caseItem.respondersNeeded && (
                  <Button className="w-full mt-2">Respond</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border">
          <Map />
        </div>
      )}
    </PageContainer>
  );
};

export default NearbyPage;
