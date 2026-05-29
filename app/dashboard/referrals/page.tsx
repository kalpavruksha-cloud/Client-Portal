import Sidebar from "@/components/layout/PremiumSidebar";
import Navbar from "@/components/layout/Navbar";

export default function ReferralsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <Navbar />

        <h1 className="text-5xl font-black gradient-text">
          Referral Earnings
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="glass rounded-3xl p-8">
            <p className="text-gray-400">
              Total Referrals
            </p>

            <h2 className="text-4xl font-bold mt-4">
              18
            </h2>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-gray-400">
              Total Earnings
            </p>

            <h2 className="text-4xl font-bold mt-4">
              ₹1,80,000
            </h2>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-gray-400">
              Referral Code
            </p>

            <h2 className="text-3xl font-bold mt-4">
              KALP100
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}