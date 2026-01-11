import { ReactNode } from "react";
import { Bell, User } from "lucide-react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen gradient-hero">
      <DashboardHeader />

      <div className="flex px-6 pb-6 min-h-[calc(100vh-80px)]">
        <DashboardSidebar />

        <main className="flex-1 bg-card rounded-r-3xl shadow-card">
          <div className="p-8">
            {/* Top Bar with Title and Actions */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                {subtitle && (
                  <p className="text-muted-foreground mt-1">{subtitle}</p>
                )}
              </div>

              {/* Notification & Profile */}
              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-border" />
                <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
                  <Bell className="w-6 h-6 text-primary" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    4
                  </span>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5E6E1] flex items-center justify-center">
                  <User className="w-5 h-5 text-[#8B7355]" />
                </button>
              </div>
            </div>

            {/* Page Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
