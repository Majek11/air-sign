import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, Plus, FileText, Settings, CreditCard, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const navItems = [
  { path: "/dashboard", label: "Overview", icon: LayoutGrid },
  { path: "/dashboard/my-contract", label: "My Contract", icon: Plus },
  { path: "/dashboard/signed-contracts", label: "Signed Contracts", icon: FileText },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
  { path: "/dashboard/billings", label: "Billings", icon: CreditCard },
];

const DashboardSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-[280px] min-h-[calc(100vh-120px)] bg-card rounded-l-3xl pt-8 px-6 pb-6 flex flex-col border border-border">
      {/* Compose Button */}
      <Link to="/dashboard/compose">
        <Button className="w-full h-12 rounded-xl text-base font-semibold mb-8">
          Compose
        </Button>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                active
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

      {/* Illustration */}
      <div className="mt-auto pt-6">
        <img
          src={heroIllustration}
          alt="Person signing document"
          className="w-[180px] object-contain mx-auto"
        />
      </div>

      {/* API Docs */}
      <div className="pt-4 border-t border-border mt-4">
        <Link
          to="/dashboard/api-docs"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
        >
          <FileCode className="w-5 h-5" />
          <span>API Docs</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
