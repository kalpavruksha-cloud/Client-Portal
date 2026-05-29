export default function TopCards() {
  const cards = [
    {
      title: "Total Investment",
      value: "₹12,50,000",
      growth: "+18.6%",
      color: "from-violet-600 to-fuchsia-500",
    },
    {
      title: "Total Returns",
      value: "₹2,25,000",
      growth: "+15.3%",
      color: "from-pink-500 to-fuchsia-500",
    },
    {
      title: "Monthly Income",
      value: "₹50,000",
      growth: "Credited",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Active Plans",
      value: "3",
      growth: "Running",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${card.color} rounded-3xl p-7 text-white shadow-xl`}
        >
          <p className="opacity-80">
            {card.title}
          </p>

          <h2 className="text-4xl font-black mt-4">
            {card.value}
          </h2>

          <p className="mt-4 opacity-90">
            {card.growth}
          </p>
        </div>
      ))}
    </div>
  );
}