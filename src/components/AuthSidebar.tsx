import { Link, useLocation } from "react-router-dom";
import { Settings, Plus, FileText, MessageSquare } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const navItems = [
  { path: "/create-account", label: "Create Account", icon: Plus },
  { path: "/login", label: "Login", icon: Settings },
  { path: "/reset-password", label: "Reset Password", icon: FileText },
  { path: "/contact-support", label: "Contact Support", icon: MessageSquare },
];

const AuthSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-[280px] min-h-[calc(100vh-120px)] bg-sidebar rounded-l-3xl pt-12 px-8 pb-8 flex flex-col border border-sidebar-border">
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                ? "bg-[#D4F5E0] text-foreground font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 -ml-6 -mb-6">
        <img
          src={heroIllustration}
          alt="Person signing document"
          className="w-[200px] object-contain"
        />
      </div>
    </aside>
  );
};

export default AuthSidebar;
