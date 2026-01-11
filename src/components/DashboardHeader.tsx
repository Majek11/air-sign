import { Bell, User, Menu, LayoutGrid, Plus, FileText, Settings, CreditCard, FileCode } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import airsignLogo from "@/assets/airsign-logo.png";
import heroIllustration from "@/assets/hero-illustration.png";

const navItems = [
  { path: "/dashboard", label: "Overview", icon: LayoutGrid },
  { path: "/dashboard/my-contract", label: "My Contract", icon: Plus },
  { path: "/dashboard/signed-contracts", label: "Signed Contracts", icon: FileText },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
  { path: "/dashboard/billings", label: "Billings", icon: CreditCard },
];

const DashboardHeader = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="flex items-center justify-between px-4 lg:px-8 py-4 h-20">
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0 flex flex-col bg-card">
            <div className="p-6">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <img src={airsignLogo} alt="Airsign Logo" className="h-8" />
              </Link>

              <Link to="/dashboard/compose">
                <Button className="w-full h-12 rounded-xl text-base font-semibold mb-8">
                  Compose
                </Button>
              </Link>

              <nav className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active
                          ? "bg-[#D4F5E0] text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-auto p-6">
              <img
                src={heroIllustration}
                alt="Person signing document"
                className="w-[180px] object-contain mx-auto mb-6"
              />

              <div className="pt-4 border-t border-border">
                <Link
                  to="/dashboard/api-docs"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
                >
                  <FileCode className="w-5 h-5" />
                  <span>API Docs</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/" className="flex items-center gap-3">
          <img src={airsignLogo} alt="Airsign Logo" className="hidden lg:block h-8" />
          <img src={airsignLogo} alt="Airsign Logo" className="lg:hidden h-6" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="destructive"
          className="rounded-full px-6 h-10 hidden sm:flex"
        >
          Logout →
        </Button>
        <Button
          variant="destructive"
          size="icon"
          className="rounded-full h-10 w-10 sm:hidden flex items-center justify-center p-0"
        >
          <span className="sr-only">Logout</span>
          →
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
