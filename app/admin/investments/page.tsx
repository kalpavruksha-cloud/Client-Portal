import InvestmentCard from "@/components/cards/InvestmentCard";

export default function InvestmentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Investments
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
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
      </div>
    </div>
  );
}