import PremiumSidebar from "@/components/layout/PremiumSidebar";
import TopCards from "@/components/dashboard/TopCards";

export default function DashboardPage() {
  return (
    <div className="flex bg-[#f5f5fb] min-h-screen">
      <PremiumSidebar />

      <main className="flex-1 p-10">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-gray-500">
              Welcome back,
            </p>

            <h1 className="text-5xl font-black">
              Satish H 👋
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white rounded-2xl px-6 py-3 shadow">
              May 2025
            </button>
          </div>
        </div>

        {/* TOP CARDS */}
        <TopCards />

        {/* CHART + ACTIVITY */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {/* CHART */}
          <div className="col-span-2 bg-gradient-to-br from-[#17072b] to-[#3b0764] rounded-[35px] p-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  Portfolio Overview
                </h2>

                <p className="text-violet-200 mt-2">
                  Wealth growth analytics
                </p>
              </div>

              <button className="bg-white/10 px-5 py-3 rounded-2xl">
                Last 6 Months
              </button>
            </div>

            {/* GRAPH */}
            <div className="h-[350px] mt-10 flex items-end gap-5">
              <div className="bg-violet-400 w-full h-[40%] rounded-t-3xl" />
              <div className="bg-fuchsia-400 w-full h-[55%] rounded-t-3xl" />
              <div className="bg-violet-400 w-full h-[70%] rounded-t-3xl" />
              <div className="bg-fuchsia-400 w-full h-[80%] rounded-t-3xl" />
              <div className="bg-violet-400 w-full h-[100%] rounded-t-3xl" />
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white rounded-[35px] p-8">
            <h2 className="text-3xl font-bold">
              Recent Activity
            </h2>

            <div className="space-y-6 mt-8">
              <Activity
                title="Monthly payout credited"
                amount="₹50,000"
              />

              <Activity
                title="Agreement uploaded"
                amount="PDF"
              />

              <Activity
                title="Referral commission"
                amount="₹5,000"
              />

              <Activity
                title="Investment added"
                amount="₹5,00,000"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Activity({
  title,
  amount,
}: any) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-5">
      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 mt-1">
          02 May 2025
        </p>
      </div>

      <span className="font-bold text-violet-700">
        {amount}
      </span>
    </div>
  );
}