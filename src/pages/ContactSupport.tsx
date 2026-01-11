import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";

const ContactSupport = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Support:", { email, message });
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Contact Support
        </h1>
        <p className="text-muted-foreground">
          {submitted
            ? "Thank you! We'll get back to you soon."
            : "We're here to help. Send us a message and we'll respond as soon as possible."}
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

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea
              placeholder="Describe your issue..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-input resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 rounded-xl text-base"
            disabled={!email || !message}
          >
            Send Message
          </Button>
        </form>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 bg-sidebar-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <Button
            onClick={() => {
              setSubmitted(false);
              setEmail("");
              setMessage("");
            }}
            className="rounded-xl px-8"
          >
            Send Another Message
          </Button>
        </div>
      )}
    </AuthLayout>
  );
};

export default ContactSupport;
