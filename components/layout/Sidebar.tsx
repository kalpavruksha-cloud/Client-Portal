"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  Landmark,
  Bell,
  FileText,
  Users,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Investments",
    href: "/dashboard/investments",
    icon: Wallet,
  },
  {
    title: "Payouts",
    href: "/dashboard/payouts",
    icon: Landmark,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Agreements",
    href: "/dashboard/agreements",
    icon: FileText,
  },
  {
    title: "Referrals",
    href: "/dashboard/referrals",
    icon: Users,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-[#0B1120] border-r border-white/10 p-6">
      <div className="mb-12">
        <h1 className="text-3xl font-black text-white">
          Kalpavruksha
        </h1>

        <p className="text-violet-400 mt-2">
          Wealth Portal
        </p>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-300 hover:bg-violet-600 hover:text-white transition-all"
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-6 right-6">
        <button className="w-full flex items-center justify-center gap-3 bg-red-500/20 text-red-400 py-4 rounded-2xl hover:bg-red-500/30 transition-all">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}