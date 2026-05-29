import Sidebar from "@/components/layout/PremiumSidebar";
import Navbar from "@/components/layout/Navbar";

export default function PayoutsPage() {
  const payouts = [
    {
      month: "May 2026",
      amount: "₹50,000",
      status: "Credited",
    },
    {
      month: "April 2026",
      amount: "₹45,000",
      status: "Credited",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <Navbar />

        <h1 className="text-5xl font-black gradient-text mb-10">
          Monthly Payouts
        </h1>

        <div className="glass rounded-3xl p-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-5 text-left">
                  Month
                </th>

                <th className="pb-5 text-left">
                  Amount
                </th>

                <th className="pb-5 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {payouts.map((item, index) => (
                <tr key={index}>
                  <td className="py-5">
                    {item.month}
                  </td>

                  <td>
                    {item.amount}
                  </td>

                  <td className="text-green-400">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}