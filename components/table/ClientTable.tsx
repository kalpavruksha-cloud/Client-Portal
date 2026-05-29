export default function ClientTable() {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-8">
      <h1 className="text-3xl font-bold text-white mb-6">
        Investor Clients
      </h1>

      <table className="w-full text-white">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left pb-4">
              Client
            </th>

            <th className="text-left pb-4">
              Investment
            </th>

            <th className="text-left pb-4">
              ROI
            </th>

            <th className="text-left pb-4">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
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
        </tbody>
      </table>
    </div>
  );
}