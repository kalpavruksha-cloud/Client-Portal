export default function ClientTable() {
  return (
    <div className="bg-[#111827] p-8 rounded-3xl border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-8">
        Investor Clients
      </h2>

      <table className="w-full text-white">
        <thead>
          <tr className="border-b border-white/10 text-left">
            <th className="pb-4">Client</th>
            <th className="pb-4">Investment</th>
            <th className="pb-4">ROI</th>
            <th className="pb-4">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-white/5">
            <td className="py-5">
              Satish H
            </td>

            <td>
              ₹5,00,000
            </td>

            <td className="text-cyan-400">
              12%
            </td>

            <td>
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                Active
              </span>
            </td>
          </tr>

          <tr className="border-b border-white/5">
            <td className="py-5">
              Rahul Kumar
            </td>

            <td>
              ₹8,50,000
            </td>

            <td className="text-cyan-400">
              15%
            </td>

            <td>
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                Active
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}