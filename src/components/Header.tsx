import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import airsignLogo from "@/assets/airsign-logo.png";

interface HeaderProps {
  showLogout?: boolean;
}

const Header = ({ showLogout = false }: HeaderProps) => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={airsignLogo} alt="Airsign by Fuspay" className="h-7" />
        </Link>

        {showLogout ? (
          <Button variant="destructive" size="sm" className="rounded-full px-5">
            Logout →
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="outline" size="sm" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Sign-in
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
