import { FileText, CheckCircle, Clock, Users, AlertTriangle } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const metrics = [
  {
    label: "Total Indemnity",
    value: 10,
    icon: FileText,
    bgColor: "bg-white",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
  {
    label: "Total signed",
    value: 10,
    icon: CheckCircle,
    bgColor: "bg-white",
    iconBg: "bg-primary",
    iconColor: "text-white",
  },
  {
    label: "Total T&C",
    value: 10,
    icon: Clock,
    bgColor: "bg-white",
    iconBg: "bg-amber-400",
    iconColor: "text-white",
  },
  {
    label: "Total Agreements",
    value: 10,
    icon: Users,
    bgColor: "bg-white",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
  },
  {
    label: "Total Disclaimers",
    value: 10,
    icon: AlertTriangle,
    bgColor: "bg-white",
    iconBg: "bg-red-500",
    iconColor: "text-white",
  },
];

const Overview = () => {
  return (
    <DashboardLayout title="Overview 🌟" subtitle="Track your contract management metrics">
      {/* Metrics Cards */}
      <div className="grid grid-cols-5 gap-4 mb-12">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-white border border-dashed border-gray-200 rounded-2xl p-5 flex flex-col"
            >
              <div className={`w-12 h-12 ${metric.iconBg} rounded-full flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
            </div>
          );
        })}
      </div>

      {/* No Recent Activity */}
      <div className="flex flex-col items-center justify-center py-16">
        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          No Recent Activity
        </span>
        <p className="text-muted-foreground">No history available yet</p>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
