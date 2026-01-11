import { useState } from "react";
import { X, Mail, Check, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

type Step = "email" | "otp" | "success";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("otp");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const maskEmail = (email: string) => {
    const [local, domain] = email.split("@");
    if (!local || !domain) return email;
    return `${local[0]}****${local[local.length - 1]}@${domain}`;
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-6 right-6 w-12 h-12 bg-red-500 text-white rounded-2xl flex items-center justify-center hover:bg-red-600 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Card */}
      <div className="bg-white rounded-3xl shadow-card p-8 w-full max-w-md text-center relative">
        {step === "email" && (
          <>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Forgot your password?
            </h1>
            <p className="text-muted-foreground mb-8">
              Don't worry, we'll send you a reset link to get back in.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-6 text-left">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full h-12 rounded-xl text-base"
                disabled={!email}
              >
                Reset Password
              </Button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-3">
              Two-Factor Authentication
            </h1>
            <p className="text-muted-foreground mb-6">
              Before you continue, enter the code<br />
              sent to <span className="text-primary font-medium">{maskEmail(email)}</span>
            </p>

            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-14 h-16 text-center text-lg font-semibold border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Didn't receive the code?{" "}
                <button type="button" className="text-primary font-medium hover:underline">
                  Resend OTP
                </button>
              </p>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-base bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-100"
                disabled={otp.some((d) => !d)}
              >
                Verify
              </Button>
            </form>
          </>
        )}

        {step === "success" && (
          <>
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-3">
              Password reset
            </h1>
            <p className="text-muted-foreground mb-8">
              Your password has been reset successfully.
            </p>

            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full h-12 rounded-xl text-base bg-primary hover:bg-primary/90 text-white"
            >
              Go to dashboard
            </Button>
          </>
        )}
      </div>

      {/* Illustration */}
      <img
        src={heroIllustration}
        alt="Person working"
        className="absolute bottom-0 right-0 w-80 object-contain pointer-events-none"
      />
    </div>
  );
};

export default ForgotPassword;
