import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import GoogleButton from "@/components/GoogleButton";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log("Create Account:", { name, email, password });
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Get started for free
        </h1>
        <p className="text-muted-foreground">
          Create a new account and start automating your contract signing processes for compliance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User className="w-5 h-5" />}
        />

        <FormInput
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="w-5 h-5" />}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<KeyRound className="w-5 h-5" />}
        />

        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base"
          disabled={!name || !email || !password}
        >
          Continue
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-transparent text-muted-foreground">
              Or Sign up with
            </span>
          </div>
        </div>

        <GoogleButton mode="signup" />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default CreateAccount;
