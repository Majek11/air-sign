import { Link as LinkIcon } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const developerResources = [
  { label: "Developer Guide" },
  { label: "Security & Compliance" },
  { label: "Terms of Services" },
  { label: "Privacy Policy" },
];

const Developer = () => {
  return (
    <DashboardLayout title="Developer" subtitle="Access resources to manage your account">
      <div className="space-y-4 max-w-3xl">
        {developerResources.map((resource, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-5 bg-white border border-border rounded-xl hover:bg-muted/30 transition-colors"
          >
            <span className="font-medium text-foreground">{resource.label}</span>
            <LinkIcon className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Developer;
