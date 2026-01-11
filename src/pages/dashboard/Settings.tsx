import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Copy, Trash2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

const tabs = [
  { id: "security", label: "Login & Security" },
  { id: "developer", label: "Developer" },
];

const apiKeys = [
  { name: "Secret Key", createdAt: "Dec 1, 2025" },
  { name: "Call Back", createdAt: "Dec 5, 2025" },
  { name: "Production Key", createdAt: "Dec 8, 2025" },
];

const developerResources = [
  { label: "Developer Guide", icon: LinkIcon },
  { label: "Security & Compliance", icon: LinkIcon },
  { label: "Terms of Services", icon: LinkIcon },
  { label: "Privacy Policy", icon: LinkIcon },
];

const Settings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "security";

  const setActiveTab = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <DashboardLayout title="Settings">
      {/* Tabs */}
      <div className="flex gap-8 border-b border-border mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Login & Security Tab */}
      {activeTab === "security" && (
        <div>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Change Password</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Update your password to keep your account secure
              </p>
            </div>
            <Button className="rounded-full px-6">Update Profile</Button>
          </div>

          <div className="space-y-6 max-w-2xl">
            {/* Current Password */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter Current Password"
                className="w-full h-12 px-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* New & Confirm Password */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="w-full h-12 px-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full h-12 px-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Developer Tab */}
      {activeTab === "developer" && (
        <div>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">API Keys</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your API keys for integration
              </p>
            </div>
            <Button className="rounded-full px-6">Generate New Key</Button>
          </div>

          {/* API Keys List */}
          <div className="space-y-4 max-w-2xl">
            {apiKeys.map((key, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl"
              >
                <div>
                  <p className="font-medium text-foreground">{key.name}</p>
                  <p className="text-sm text-muted-foreground">Created {key.createdAt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Settings;
