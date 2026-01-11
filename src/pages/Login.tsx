import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import GoogleButton from "@/components/GoogleButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { email, password });
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          We missed you! Time to dive back in.
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="w-5 h-5" />}
        />

        <div>
          <FormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<KeyRound className="w-5 h-5" />}
          />
          <Link
            to="/reset-password"
            className="inline-block mt-2 text-sm text-primary hover:underline"
          >
            Forgot password
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base"
          disabled={!email || !password}
        >
          Continue
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-transparent text-muted-foreground">
              Or Sign in with
            </span>
          </div>
        </div>

        <GoogleButton mode="signin" />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link to="/create-account" className="text-primary font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
