import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic
    console.log("Reset Password:", { email });
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Reset your password
        </h1>
        <p className="text-muted-foreground">
          {submitted
            ? "Check your email for a password reset link."
            : "Enter your email address and we'll send you a link to reset your password."}
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormInput
            label="Email address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-5 h-5" />}
          />

          <Button
            type="submit"
            className="w-full h-12 rounded-xl text-base"
            disabled={!email}
          >
            Send Reset Link
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Remember your password?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 bg-sidebar-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <Link to="/login">
            <Button className="rounded-xl px-8">Back to Login</Button>
          </Link>
        </div>
      )}
    </AuthLayout>
  );
};

export default ResetPassword;
