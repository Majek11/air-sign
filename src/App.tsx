import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ResetPassword from "./pages/ResetPassword";
import ContactSupport from "./pages/ContactSupport";
import ForgotPassword from "./pages/ForgotPassword";
import Overview from "./pages/dashboard/Overview";
import MyContract from "./pages/dashboard/MyContract";
import Settings from "./pages/dashboard/Settings";
import Developer from "./pages/dashboard/Developer";
import Billings from "./pages/dashboard/Billings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/my-contract" element={<MyContract />} />
          <Route path="/dashboard/compose" element={<MyContract />} />
          <Route path="/dashboard/signed-contracts" element={<MyContract />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/developer" element={<Developer />} />
          <Route path="/dashboard/billings" element={<Billings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
