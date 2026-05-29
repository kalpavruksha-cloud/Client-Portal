"use client";

import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", amount: 20000 },
  { month: "Feb", amount: 35000 },
  { month: "Mar", amount: 48000 },
  { month: "Apr", amount: 70000 },
  { month: "May", amount: 90000 },
  { month: "Jun", amount: 120000 },
];

export default function PremiumChart() {
  return (
    <div className="glass rounded-3xl p-8 mt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            Portfolio Growth
          </h2>

          <p className="text-gray-400 mt-2">
            Investment performance analytics
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-4xl font-bold gradient-text">
            +28.5%
          </h3>

          <p className="text-gray-400">
            yearly growth
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <XAxis dataKey="month" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.25}
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
