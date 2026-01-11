import { Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import airsignLogo from "@/assets/airsign-logo.png";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 h-20">
      <Link to="/" className="flex items-center gap-3">
        <img src={airsignLogo} alt="Airsign Logo" className="h-8" />
      </Link>

      <div className="flex items-center gap-4">
        <Button
          variant="destructive"
          className="rounded-full px-6 h-10"
        >
          Logout →
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
