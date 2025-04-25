
import { useState, useEffect } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Award, HandHeart, Check, Hospital } from "lucide-react";
import { TokenTransaction, RedemptionPartner } from "@/types/token";

export const TokenWalletPage = () => {
  const [balance, setBalance] = useState(250);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([
    {
      id: "1",
      user_id: "123",
      amount: 50,
      description: "Responded to Medical Emergency",
      transaction_type: "earn",
      created_at: "2023-05-10T14:32:00Z",
      action_type: "respond",
      verified: true,
      emergency_id: "em123"
    },
    {
      id: "2",
      user_id: "123",
      amount: 150,
      description: "Provided first aid assistance",
      transaction_type: "earn",
      created_at: "2023-04-22T09:15:00Z",
      action_type: "assist",
      verified: true,
      emergency_id: "em124"
    },
    {
      id: "3",
      user_id: "123",
      amount: 100,
      description: "Filed emergency report for building fire",
      transaction_type: "earn",
      created_at: "2023-03-05T18:45:00Z",
      action_type: "report",
      verified: true,
      emergency_id: "em125"
    },
    {
      id: "4",
      user_id: "123",
      amount: 50,
      description: "Redeemed at City Central Hospital",
      transaction_type: "redeem",
      created_at: "2023-02-15T21:20:00Z",
      verified: true
    }
  ]);

  const partners: RedemptionPartner[] = [
    {
      id: "p1",
      name: "City Central Hospital",
      logo: "🏥",
      discount_percentage: 20,
      max_discount_percentage: 20,
      location: "Main Street, Davangere",
      services: ["Outpatient care", "Emergency services", "Lab tests"]
    },
    {
      id: "p2",
      name: "MediLife Clinic",
      logo: "⚕️",
      discount_percentage: 15,
      max_discount_percentage: 15,
      location: "KR Road, Davangere",
      services: ["General checkups", "Specialist consultations"]
    },
    {
      id: "p3",
      name: "HealthPlus Pharmacy",
      logo: "💊",
      discount_percentage: 10,
      max_discount_percentage: 10,
      location: "PJ Extension, Davangere",
      services: ["Prescription medications", "Medical supplies"]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getTransactionIcon = (transaction: TokenTransaction) => {
    if (transaction.transaction_type === "redeem") {
      return <Hospital className="h-5 w-5 text-blue-500" />;
    }

    switch (transaction.action_type) {
      case "report":
        return <HandHeart className="h-5 w-5 text-orange-500" />;
      case "respond":
        return <Award className="h-5 w-5 text-emerald-500" />;
      case "assist":
        return <Check className="h-5 w-5 text-purple-500" />;
      default:
        return <Coins className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Token Wallet
        </h1>
        <p className="text-muted-foreground text-lg mt-1">Earn and redeem tokens for your volunteer work</p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl mb-6 shadow-md border border-amber-100">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mr-4 shadow-inner">
              <Coins className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Balance</p>
              <h2 className="text-3xl font-bold text-amber-700 flex items-center">
                {balance}
                <span className="ml-1 text-lg">tokens</span>
              </h2>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600">
            Redeem Tokens
          </Button>
        </div>
      </div>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-6 p-1 bg-secondary/50">
          <TabsTrigger 
            value="history" 
            className="text-base py-3 data-[state=active]:bg-white data-[state=active]:text-amber-600 data-[state=active]:shadow-md transition-all"
          >
            History
          </TabsTrigger>
          <TabsTrigger 
            value="partners" 
            className="text-base py-3 data-[state=active]:bg-white data-[state=active]:text-amber-600 data-[state=active]:shadow-md transition-all"
          >
            Partners
          </TabsTrigger>
          <TabsTrigger 
            value="rewards" 
            className="text-base py-3 data-[state=active]:bg-white data-[state=active]:text-amber-600 data-[state=active]:shadow-md transition-all"
          >
            Rewards
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4 animate-in fade-in-50">
          <h3 className="font-medium text-lg mb-2">Transaction History</h3>
          
          {transactions.map((transaction) => (
            <Card key={transaction.id} className={`overflow-hidden hover:shadow-lg transition-all border-l-4 ${
              transaction.transaction_type === "earn" 
                ? "border-l-green-500" 
                : "border-l-blue-500"
            }`}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${
                      transaction.transaction_type === "earn" 
                        ? "bg-green-100" 
                        : "bg-blue-100"
                    }`}>
                      {getTransactionIcon(transaction)}
                    </div>
                    <div>
                      <h3 className="font-medium">{transaction.description}</h3>
                      <p className="text-sm text-muted-foreground">{formatDate(transaction.created_at)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.transaction_type === "earn" 
                        ? "text-green-600" 
                        : "text-blue-600"
                    }`}>
                      {transaction.transaction_type === "earn" ? "+" : "-"}{transaction.amount} tokens
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="partners" className="space-y-4 animate-in fade-in-50">
          <h3 className="font-medium text-lg mb-2">Redemption Partners</h3>
          
          {partners.map((partner) => (
            <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-3">{partner.logo}</div>
                    <div>
                      <h3 className="font-medium">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground">{partner.location}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {partner.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-amber-600">Up to {partner.max_discount_percentage}% discount</p>
                    <Button size="sm" variant="outline" className="mt-2">Redeem Here</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6 animate-in fade-in-50">
          <h3 className="font-medium text-lg mb-2">Achievement Progress</h3>
          
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Award className="h-5 w-5 text-amber-500 mr-2" /> First Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-1 text-sm">
                <span>1/1 responses</span>
                <span className="font-medium text-green-600">Completed!</span>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Reward: 50 bonus tokens
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Award className="h-5 w-5 text-amber-500 mr-2" /> Life Saver
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-1 text-sm">
                <span>3/10 life-saving responses</span>
                <span>30% complete</span>
              </div>
              <Progress value={30} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Reward: 500 bonus tokens + Gold Responder badge
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Award className="h-5 w-5 text-amber-500 mr-2" /> Dedicated Volunteer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-1 text-sm">
                <span>3/20 responses</span>
                <span>15% complete</span>
              </div>
              <Progress value={15} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Reward: 200 bonus tokens + Unlock exclusive partner benefits
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default TokenWalletPage;
