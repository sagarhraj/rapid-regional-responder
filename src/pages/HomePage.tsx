
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Heart, Shield } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const HomePage = () => {
  const [volunteerStatus, setVolunteerStatus] = useState<"active" | "inactive">("inactive");
  
  return (
    <PageContainer className="space-y-6">
      <div className="text-center mt-2">
        <h1 className="text-2xl font-bold">Welcome to MyResponder</h1>
        <p className="text-muted-foreground">Help save lives in your community</p>
      </div>
      
      <Card className="border-2 border-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-center">Volunteer Status</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="inline-flex items-center justify-center bg-secondary rounded-full p-4 mb-4">
            <Heart className={`h-8 w-8 ${volunteerStatus === "active" ? "text-primary" : "text-muted-foreground"}`} />
          </div>
          <div>
            <p className="font-medium">You are currently</p>
            <p className={`font-bold text-lg ${volunteerStatus === "active" ? "text-primary" : "text-muted-foreground"}`}>
              {volunteerStatus === "active" ? "ACTIVE" : "INACTIVE"}
            </p>
            <Button
              className="mt-4 w-full"
              variant={volunteerStatus === "active" ? "outline" : "default"}
              onClick={() => setVolunteerStatus(volunteerStatus === "active" ? "inactive" : "active")}
            >
              {volunteerStatus === "active" ? "Go Inactive" : "Go Active"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="w-full emergency-button pulse h-16">
            <AlertTriangle className="mr-2 h-6 w-6" />
            Report Emergency
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Report an Emergency</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="medical">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="fire">Fire</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="medical" className="space-y-4">
              <Button className="w-full" size="lg">
                Cardiac Arrest
              </Button>
              <Button className="w-full" size="lg">
                Trauma/Injury
              </Button>
              <Button className="w-full" size="lg">
                Unconscious Person
              </Button>
            </TabsContent>
            <TabsContent value="fire" className="space-y-4">
              <Button className="w-full" size="lg">
                Building Fire
              </Button>
              <Button className="w-full" size="lg">
                Vehicle Fire
              </Button>
              <Button className="w-full" size="lg">
                Other Fire
              </Button>
            </TabsContent>
            <TabsContent value="other" className="space-y-4">
              <Button className="w-full" size="lg">
                Public Safety
              </Button>
              <Button className="w-full" size="lg">
                Trapped Person
              </Button>
              <Button className="w-full" size="lg">
                Other Emergency
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-center">Cases Near You</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <CardDescription>Within 5km</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-center">Your Responses</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <CardDescription>This month</CardDescription>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5 text-primary" />
            Community Safety Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Learn CPR and basic first aid skills</li>
            <li>Always report suspicious activities</li>
            <li>Keep emergency contacts readily available</li>
            <li>Familiarize yourself with nearby AED locations</li>
          </ul>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default HomePage;
