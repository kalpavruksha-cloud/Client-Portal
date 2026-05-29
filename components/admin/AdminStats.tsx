export default function AdminStats() {
  const stats = [
    {
      title: "Total Investors",
      value: "1,284",
    },
    {
      title: "Total Investment",
      value: "₹12.8 Cr",
    },
    {
      title: "Monthly Payout",
      value: "₹64 L",
    },
    {
      title: "Pending Withdrawals",
      value: "₹18 L",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="glass rounded-3xl p-6"
        >
          <p className="text-gray-400">
            {item.title}
          </p>

          <h2 className="text-4xl font-bold mt-4">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}