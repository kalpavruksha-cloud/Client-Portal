"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  BadgeIndianRupee,
  FileText,
  Bell,
  Users,
  User,
  LogOut,
} from "lucide-react";

export default function PremiumSidebar() {
  return (
    <div className="w-[280px] bg-white min-h-screen border-r border-gray-100 p-5 flex flex-col justify-between">
      <div>
        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-[#4c1d95]">
            Kalpavruksha
          </h1>

          <p className="text-gray-400 mt-1">
            WEALTH
          </p>
        </div>

        {/* PROFILE */}
        <div className="bg-[#f5f5fb] rounded-3xl p-5 mb-8">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="font-bold text-lg">
                Satish H
              </h2>

              <p className="text-gray-500 text-sm">
                Investor
              </p>

              <span className="bg-violet-100 text-violet-700 text-xs px-3 py-1 rounded-full mt-2 inline-block">
                Premium
              </span>
            </div>
          </div>
        </div>

        {/* MENUS */}
        <div className="space-y-3">
          <SidebarItem
            href="/dashboard"
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            active
          />

          <SidebarItem
            href="/investments"
            icon={<Wallet size={20} />}
            title="Investments"
          />

          <SidebarItem
            href="/payouts"
            icon={<BadgeIndianRupee size={20} />}
            title="Payouts"
          />

          <SidebarItem
            href="/agreements"
            icon={<FileText size={20} />}
            title="Agreements"
          />

          <SidebarItem
            href="/referrals"
            icon={<Users size={20} />}
            title="Referrals"
          />

          <SidebarItem
            href="/notifications"
            icon={<Bell size={20} />}
            title="Notifications"
          />

          <SidebarItem
            href="/profile"
            icon={<User size={20} />}
            title="Profile"
          />
        </div>
      </div>

      {/* LOGOUT */}
      <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-all">
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
}

function SidebarItem({
  href,
  icon,
  title,
  active,
}: any) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
        active
          ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg"
          : "hover:bg-[#f5f5fb] text-gray-700"
      }`}
    >
      {icon}
      <span className="font-medium">
        {title}
      </span>
    </Link>
  );
}