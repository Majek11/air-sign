import { ReactNode } from "react";
import Header from "./Header";
import AuthSidebar from "./AuthSidebar";
import { Headphones } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header showLogout />

      <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-8 py-4 lg:py-8 min-h-[calc(100vh-80px)]">
        <AuthSidebar />

        <main className="flex-1 flex items-start justify-center bg-card rounded-3xl lg:rounded-l-none lg:rounded-r-3xl shadow-card pt-8">
          <div className="w-full max-w-xl py-8 px-6 lg:py-16 lg:px-12">{children}</div>
        </main>
      </div>

      <footer className="fixed bottom-8 right-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Headphones className="w-4 h-4" />
        <span>Need help?</span>
        <button className="font-semibold text-foreground hover:text-primary transition-colors">
          Contact Support
        </button>
      </footer>
    </div>
  );
};

export default AuthLayout;
