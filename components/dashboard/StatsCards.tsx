import {
  Wallet,
  TrendingUp,
  Landmark,
  Coins,
} from "lucide-react";

const cards = [
  {
    title: "Total Investment",
    value: "₹25,00,000",
    icon: Wallet,
  },
  {
    title: "Monthly Returns",
    value: "₹1,25,000",
    icon: TrendingUp,
  },
  {
    title: "Withdrawals",
    value: "₹8,40,000",
    icon: Landmark,
  },
  {
    title: "Pending Payouts",
    value: "₹42,000",
    icon: Coins,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="glass rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-4">
                  {card.value}
                </h2>
              </div>

              <div className="bg-violet-600/20 p-4 rounded-2xl">
                <Icon className="text-violet-400" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}