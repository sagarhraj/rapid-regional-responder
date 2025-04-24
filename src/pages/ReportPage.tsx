
import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Camera, MapPin, Mic, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export const ReportPage = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [emergencyType, setEmergencyType] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  
  const emergencyTypes = [
    { id: "cardiac", label: "Cardiac Arrest", icon: "🫀", category: "medical" },
    { id: "injury", label: "Injury/Trauma", icon: "🩹", category: "medical" },
    { id: "unconscious", label: "Unconscious Person", icon: "😴", category: "medical" },
    { id: "building-fire", label: "Building Fire", icon: "🏢", category: "fire" },
    { id: "vehicle-fire", label: "Vehicle Fire", icon: "🚗", category: "fire" },
    { id: "trapped", label: "Trapped Person", icon: "🚪", category: "other" },
    { id: "other", label: "Other Emergency", icon: "❗", category: "other" },
  ];

  const handleEmergencySelect = (id: string) => {
    setEmergencyType(id);
    setStep(2);
  };

  const handleSubmitReport = () => {
    toast({
      title: "Emergency Reported",
      description: "Your report has been submitted and help is on the way.",
    });
    
    // In a real app, we would submit to an API here
    setTimeout(() => {
      setStep(3);
    }, 1000);
  };

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Report Emergency</h1>
        <p className="text-muted-foreground">Help is on the way</p>
      </div>
      
      {step === 1 && (
        <div className="space-y-4">
          <p className="font-medium">Select emergency type:</p>
          <div className="grid grid-cols-2 gap-3">
            {emergencyTypes.map((type) => (
              <Button
                key={type.id}
                variant="outline"
                className="h-20 flex-col"
                onClick={() => handleEmergencySelect(type.id)}
              >
                <span className="text-2xl mb-1">{type.icon}</span>
                <span className="text-sm">{type.label}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {step === 2 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="text-sm">
              {emergencyTypes.find(t => t.id === emergencyType)?.label}
            </Badge>
            <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
              Change
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-4">
              <Textarea
                placeholder="Describe the emergency situation..."
                className="mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              
              <div className="flex justify-between mb-4">
                <Button variant="outline" size="icon">
                  <Camera className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleSubmitReport}
                disabled={description.length < 5}
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Report
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
      
      {step === 3 && (
        <div className="text-center space-y-6">
          <div className="bg-primary/10 rounded-full p-6 inline-flex mx-auto">
            <AlertTriangle className="h-12 w-12 text-primary" />
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-2">Emergency Reported</h2>
            <p className="text-muted-foreground mb-4">
              Your report has been submitted and emergency services have been notified.
            </p>
            
            <Card className="mb-4">
              <CardContent className="p-4">
                <p className="font-medium mb-2">Emergency Type:</p>
                <p className="mb-4">{emergencyTypes.find(t => t.id === emergencyType)?.label}</p>
                
                <p className="font-medium mb-2">Description:</p>
                <p className="mb-4">{description}</p>
                
                <p className="font-medium mb-2">Location:</p>
                <p>Using your current location</p>
              </CardContent>
            </Card>
            
            <p className="text-primary font-medium">Stay on this page until help arrives</p>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default ReportPage;
