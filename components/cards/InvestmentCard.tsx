interface Props {
  plan: string;
  amount: string;
  roi: string;
}

export default function InvestmentCard({
  plan,
  amount,
  roi,
}: Props) {
  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="text-2xl font-bold">
        {plan}
      </h2>

      <p className="text-gray-400 mt-4">
        Investment
      </p>

      <h3 className="text-4xl font-bold mt-2">
        {amount}
      </h3>

      <div className="mt-6">
        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
          ROI {roi}
        </span>
      </div>
    </div>
  );
}