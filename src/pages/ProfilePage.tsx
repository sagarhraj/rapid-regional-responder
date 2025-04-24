
import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, ChevronRight, Award, Heart, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export const ProfilePage = () => {
  const [notifications, setNotifications] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account</p>
      </div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xl font-bold text-primary">TS</span>
        </div>
        <div>
          <h2 className="font-bold">Tan Seng</h2>
          <div className="flex items-center text-sm text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-blue-500 mr-1" />
            <span>Verified Volunteer</span>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="info">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p>Tan Seng</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact Number</p>
                <p>+65 9123 4567</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>tanseng@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p>Block 123, Tampines Street 45, #10-123, Singapore 520123</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Qualifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 mr-3 rounded-full bg-green-100 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">CPR Certified</p>
                    <p className="text-xs text-muted-foreground">Expires: Dec 2025</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 mr-3 rounded-full bg-blue-100 flex items-center justify-center">
                    <BadgeCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">First Aid Trained</p>
                    <p className="text-xs text-muted-foreground">Expires: Jun 2024</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <Button variant="outline" className="w-full">
                Add Qualification
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Responses</span>
                  <span className="text-sm font-medium">12/50</span>
                </div>
                <Progress value={24} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Lives Potentially Saved</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Community Rating</span>
                  <span className="text-sm font-medium">4.8/5.0</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-medium text-center">First Response</h3>
                <p className="text-xs text-muted-foreground text-center">First emergency response</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-center">Life Saver</h3>
                <p className="text-xs text-muted-foreground text-center">Helped save a life</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  CPR Hero
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  First Responder
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  3 Month Streak
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  Training Champion
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emergency-alerts" className="font-medium">Emergency Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts for nearby emergencies</p>
                </div>
                <Switch id="emergency-alerts" checked={notifications} onCheckedChange={setNotifications} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="training-reminders" className="font-medium">Training Reminders</Label>
                  <p className="text-sm text-muted-foreground">Get notified about upcoming trainings</p>
                </div>
                <Switch id="training-reminders" checked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="community-updates" className="font-medium">Community Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive news and updates</p>
                </div>
                <Switch id="community-updates" checked={false} />
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="location-sharing" className="font-medium">Location Sharing</Label>
                  <p className="text-sm text-muted-foreground">Share your location when responding</p>
                </div>
                <Switch id="location-sharing" checked={locationSharing} onCheckedChange={setLocationSharing} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="background-tracking" className="font-medium">Background Tracking</Label>
                  <p className="text-sm text-muted-foreground">Allow tracking while app is closed</p>
                </div>
                <Switch id="background-tracking" checked={false} />
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full">
              Update Personal Information
            </Button>
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            <Button variant="destructive" className="w-full">
              Log Out
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default ProfilePage;
