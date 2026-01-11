import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Bold, Italic, Underline, Upload, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

const tabs = [
  { id: "compose", label: "Compose" },
  { id: "all", label: "All Contracts" },
  { id: "signed", label: "Signed Contracts" },
];

const contractData = [
  { title: "Agreement of indemnity...", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Signed", date: "12/09/2025 | 12:00am", hasDownload: true },
  { title: "Deed of Assignment..", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Void", date: "12/09/2025", hasDownload: false },
  { title: "Employee Offer Contract...", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Signed", date: "12/09/2025", hasDownload: false },
  { title: "N100,000", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Draft", date: "12/09/2025", hasDownload: true },
  { title: "N100,000", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Signed", date: "12/09/2025", hasDownload: false },
  { title: "N100,000", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Signed", date: "12/09/2025", hasDownload: true },
  { title: "N100,000", parties: "avis@fuspay...+3", contractId: "3456788944", status: "Draft", date: "12/09/2025", hasDownload: true },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Signed":
      return "text-primary";
    case "Void":
      return "text-red-500";
    case "Draft":
      return "text-amber-500 bg-amber-50 px-2 py-0.5 rounded";
    default:
      return "text-gray-500";
  }
};

const MyContract = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "compose";
  const [currentPage, setCurrentPage] = useState(3);

  const setActiveTab = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <DashboardLayout title="My Contract">
      {/* Tabs */}
      <div className="flex gap-8 border-b border-border mb-6">
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

      {/* Compose Tab */}
      {activeTab === "compose" && (
        <div>
          {/* Send To */}
          <div className="flex items-center gap-4 mb-4">
            <label className="text-sm text-muted-foreground w-16">Send To</label>
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 h-11 px-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <span className="px-3 py-1 border border-primary text-primary text-xs rounded-full">
              In-Draft
            </span>
          </div>

          {/* CC & BCC */}
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-4 flex-1">
              <label className="text-sm text-muted-foreground w-8">CC</label>
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 h-11 px-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex items-center gap-4 flex-1">
              <label className="text-sm text-muted-foreground w-8">BCC</label>
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 h-11 px-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-2 mb-2">
            <button className="p-2 hover:bg-muted rounded">
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded">
              <Italic className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded">
              <Underline className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded">
              <Upload className="w-4 h-4" />
            </button>
          </div>

          {/* Text Editor */}
          <textarea
            className="w-full h-64 p-4 bg-muted/30 border border-border rounded-xl text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Lorem ipsum dolor sit amet consectetur..."
            defaultValue="Lorem ipsum dolor sit amet consectetur. Semper vitae adipiscing at non. Mauris commodo blandit tincidunt nibh pellentesque nunc et. In maecenas velit pharetra at enim rutrum mauris dignissim eu. Nunc interdum netus in facilisis donec et."
          />

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <Button className="px-12 h-12 rounded-xl">Save</Button>
            <Button variant="outline" className="px-12 h-12 rounded-xl">
              Download
            </Button>
          </div>
        </div>
      )}

      {/* All Contracts Tab */}
      {activeTab === "all" && (
        <div>
          {/* Table */}
          <div className="bg-muted/30 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="px-4 py-3 font-medium">Contract Title</th>
                  <th className="px-4 py-3 font-medium">Parties</th>
                  <th className="px-4 py-3 font-medium">Contract ID</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Payment link</th>
                </tr>
              </thead>
              <tbody>
                {contractData.map((contract, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-4 text-sm">{contract.title}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{contract.parties}</td>
                    <td className="px-4 py-4 text-sm">{contract.contractId}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className="text-foreground">Edit</span>
                      <span className="mx-2 text-border">|</span>
                      <span className="text-red-500">Delete</span>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className={getStatusStyle(contract.status)}>{contract.status}</span>
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{contract.date}</td>
                    <td className="px-4 py-4">
                      {contract.hasDownload ? (
                        <button className="px-4 py-1.5 border border-border rounded-full text-xs hover:bg-muted transition-colors">
                          Download
                        </button>
                      ) : (
                        <span className="px-4 py-1.5 border border-border rounded-full text-xs text-muted-foreground">
                          Unavailable
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "border-2 border-foreground text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Signed Contracts Tab */}
      {activeTab === "signed" && (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-muted-foreground">No signed contracts yet</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default MyContract;
