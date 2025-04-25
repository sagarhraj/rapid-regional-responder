
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Phone } from "lucide-react";

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      const { error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
      });

      if (error) throw error;

      setShowOTP(true);
      toast({
        title: "OTP Sent",
        description: "Please check your phone for the verification code.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user }, error } = await supabase.auth.verifyOtp({
        phone: phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`,
        token: otp,
        type: "sms",
      });

      if (error) throw error;

      if (user) {
        // Update the user's profile with first and last name
        const { error: updateError } = await supabase
          .from('profiles')
          .upsert({ 
            id: user.id,
            first_name: firstName,
            last_name: lastName,
            updated_at: new Date().toISOString()
          });

        if (updateError) throw updateError;

        toast({
          title: "Success",
          description: `Welcome, ${firstName}!`,
        });
      }

      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Welcome to RRR
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {!showOTP ? "Enter your phone number to get started" : "Please verify your phone number"}
          </p>
        </div>

        {!showOTP ? (
          <form onSubmit={handleSendOTP} className="mt-8 space-y-6">
            <div>
              <div className="flex items-center border border-input rounded-md px-3">
                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                <Input
                  type="tel"
                  placeholder="Phone number (e.g., +1234567890)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  pattern="^\+?[1-9]\d{1,14}$"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Verification Code"}
            </Button>
          </form>
        ) : (
          <form onSubmit={verifyOTP} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Enter verification code</label>
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((_, i) => (
                        <InputOTPSlot key={i} index={i} />
                      ))}
                    </InputOTPGroup>
                  )}
                />
              </div>

              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </FormControl>
              </FormItem>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading || otp.length !== 6 || !firstName || !lastName}
            >
              {loading ? "Verifying..." : "Verify Code"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
