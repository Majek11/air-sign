import { Eye } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const transactions = [
  { date: "12/09/2025", amount: "N100,000", status: "Successful", method: "Visa 5134", transactionId: "3456788944", hasDownload: true },
  { date: "12/09/2025", amount: "N100,000", status: "Failed", method: "Bank transfer", transactionId: "3456788944", hasDownload: false },
  { date: "12/09/2025", amount: "N100,000", status: "Successful", method: "Bank transfer", transactionId: "3456788944", hasDownload: false },
  { date: "12/09/2025", amount: "N100,000", status: "Pending", method: "Mastercard 5031", transactionId: "3456788944", hasDownload: true },
  { date: "12/09/2025", amount: "N100,000", status: "Successful", method: "Bank transfer", transactionId: "3456788944", hasDownload: false },
  { date: "12/09/2025", amount: "N100,000", status: "Successful", method: "Mastercard 5031", transactionId: "3456788944", hasDownload: true },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Successful":
      return "text-primary";
    case "Failed":
      return "text-red-500";
    case "Pending":
      return "text-amber-500 bg-amber-50 px-2 py-0.5 rounded";
    default:
      return "text-gray-500";
  }
};

const Billings = () => {
  return (
    <DashboardLayout title="Billings" subtitle="Manage your subscription and credits">
      {/* Credit Balance & Account Info */}
      <div className="flex gap-4 mb-8">
        {/* Credit Balance Card */}
        <div className="w-[60%] bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-6 text-white relative overflow-hidden">
          <p className="text-sm opacity-90 mb-2">Credit Balance</p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold">N 0.00,000</span>
            <span className="text-2xl">.00</span>
          </div>
          <Eye className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 opacity-50" />
        </div>

        {/* Account Info */}
        <div className="w-[40%] bg-white border border-border rounded-2xl p-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account</span>
              <span className="font-medium">7045275781</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium">Charles Avis</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bank</span>
              <span className="font-medium">Globus Bank</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-muted/30 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground border-b border-border">
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Payment Method</th>
              <th className="px-4 py-3 font-medium">Transaction ID</th>
              <th className="px-4 py-3 font-medium">Payment link</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-4 text-sm">{tx.date}</td>
                <td className="px-4 py-4 text-sm">{tx.amount}</td>
                <td className="px-4 py-4 text-sm">
                  <span className={getStatusStyle(tx.status)}>{tx.status}</span>
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">{tx.method}</td>
                <td className="px-4 py-4 text-sm">{tx.transactionId}</td>
                <td className="px-4 py-4">
                  {tx.hasDownload ? (
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
    </DashboardLayout>
  );
};

export default Billings;
