import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import InvestmentCard from "@/components/cards/InvestmentCard";

export default function InvestmentsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <Navbar />

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-black gradient-text">
              Investments
            </h1>

            <p className="text-gray-400 mt-2">
              Active investment portfolio
            </p>
          </div>

          <button className="bg-violet-600 px-6 py-4 rounded-2xl">
            Create Investment
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <InvestmentCard
            plan="Premium Growth"
            amount="₹5,00,000"
            roi="12%"
          />

          <InvestmentCard
            plan="Elite Wealth"
            amount="₹10,00,000"
            roi="18%"
          />

          <InvestmentCard
            plan="Future Secure"
            amount="₹15,00,000"
            roi="20%"
          />
        </div>
      </div>
    </div>
  );
}