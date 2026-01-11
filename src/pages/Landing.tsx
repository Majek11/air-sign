import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import heroIllustration from "@/assets/hero-illustration.png";

const Landing = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />

      <main className="container mx-auto px-6 py-12 flex items-center justify-between gap-8 min-h-[calc(100vh-80px)]">
        {/* Hero Content */}
        <div className="flex-1 max-w-xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground mb-6">
            Create a programmable{" "}
            <span className="text-gradient-primary">document signing</span>{" "}
            for compliance.
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            An API-driven document signing solution built for fintech compliance processes
          </p>

          <div className="flex items-center gap-4">
            <Link to="/create-account">
              <Button size="lg" className="rounded-full px-8 shadow-button">
                Get Started Now!
              </Button>
            </Link>
            
            <Link
              to="/docs"
              className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
            >
              View API Docs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="flex-1 flex justify-center animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroIllustration}
            alt="Person signing document on tablet"
            className="w-full max-w-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default Landing;
