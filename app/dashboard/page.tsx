import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import StatsCards from "@/components/dashboard/StatsCards";
import PremiumChart from "@/components/charts/PremiumChart";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <Navbar />

        <StatsCards />

        <PremiumChart />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Latest Transactions
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span>Payout Credited</span>
                <span className="text-green-400">
                  + ₹45,000
                </span>
              </div>

              <div className="flex justify-between">
                <span>Investment Added</span>
                <span className="text-cyan-400">
                  + ₹5,00,000
                </span>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Notifications
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-violet-600/10">
                Your monthly payout is credited.
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10">
                Agreement uploaded successfully.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
