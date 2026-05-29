import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="glass rounded-3xl p-5 flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">
          Investor Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Premium Wealth Analytics Portal
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3">
          <Search size={18} />
          <input
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>

        <div className="glass p-4 rounded-2xl">
          <Bell />
        </div>

        <div className="w-12 h-12 rounded-full bg-violet-600 glow" />
      </div>
    </div>
  );
}