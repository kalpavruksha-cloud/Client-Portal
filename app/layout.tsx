"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Wallet,
  BadgeDollarSign,
  BellRing,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px]" />

      {/* NAVBAR */}
      <header className="relative z-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight">
              Kalpavruksha Wealth
            </h1>

            <p className="text-violet-400 text-sm mt-1">
              Premium Wealth Management Platform
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              Client Login
            </Link>

            <Link
              href="/dashboard"
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-2xl flex items-center gap-2 transition-all"
            >
              Open Portal
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full text-violet-300 mb-8">
              <TrendingUp size={18} />
              Trusted Investment Ecosystem
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Grow Your
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Wealth{" "}
              </span>
              with Confidence
            </h1>

            <p className="text-gray-400 text-xl leading-9 mt-8 max-w-2xl">
              Experience institutional-grade investment management with
              premium portfolio analytics, automated monthly returns,
              agreement tracking, and intelligent wealth monitoring.
            </p>

            <div className="flex items-center gap-5 mt-10">
              <Link
                href="/login"
                className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 transition-all shadow-2xl shadow-violet-500/30"
              >
                Access Client Portal
                <ArrowRight size={20} />
              </Link>

              <button className="border border-white/10 hover:bg-white/10 px-8 py-4 rounded-2xl text-lg transition-all">
                Learn More
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div>
                <h2 className="text-4xl font-black">
                  ₹50Cr+
                </h2>

                <p className="text-gray-400 mt-2">
                  Managed Assets
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black">
                  500+
                </h2>

                <p className="text-gray-400 mt-2">
                  Investors
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black">
                  18%
                </h2>

                <p className="text-gray-400 mt-2">
                  Avg Returns
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE DASHBOARD MOCKUP */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl">
              {/* TOP CARDS */}
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#111827] rounded-3xl p-6 border border-white/10">
                  <p className="text-gray-400">
                    Total Investment
                  </p>

                  <h2 className="text-4xl font-black mt-4">
                    ₹12.5L
                  </h2>

                  <p className="text-emerald-400 mt-3">
                    +18.2% Growth
                  </p>
                </div>

                <div className="bg-[#111827] rounded-3xl p-6 border border-white/10">
                  <p className="text-gray-400">
                    Monthly Returns
                  </p>

                  <h2 className="text-4xl font-black mt-4">
                    ₹85K
                  </h2>

                  <p className="text-cyan-400 mt-3">
                    Credited Monthly
                  </p>
                </div>
              </div>

              {/* PORTFOLIO CHART */}
              <div className="mt-6 bg-[#111827] rounded-3xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Portfolio Analytics
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Wealth performance overview
                    </p>
                  </div>

                  <TrendingUp className="text-violet-400" size={28} />
                </div>

                <div className="h-[220px] flex items-end gap-4 mt-10">
                  <div className="bg-violet-500 w-full rounded-t-3xl h-[45%]" />
                  <div className="bg-cyan-500 w-full rounded-t-3xl h-[60%]" />
                  <div className="bg-violet-500 w-full rounded-t-3xl h-[80%]" />
                  <div className="bg-cyan-500 w-full rounded-t-3xl h-[70%]" />
                  <div className="bg-violet-500 w-full rounded-t-3xl h-[100%]" />
                </div>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                  <ShieldCheck className="text-violet-400 mb-4" />
                  <p className="font-semibold">
                    Secure Investments
                  </p>
                </div>

                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                  <Wallet className="text-cyan-400 mb-4" />
                  <p className="font-semibold">
                    Smart Portfolio
                  </p>
                </div>

                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                  <BadgeDollarSign className="text-emerald-400 mb-4" />
                  <p className="font-semibold">
                    Monthly Payouts
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 -left-8 bg-violet-600 rounded-3xl p-6 shadow-2xl shadow-violet-500/30">
              <div className="flex items-center gap-4">
                <BellRing />

                <div>
                  <p className="font-semibold">
                    Payout Credited
                  </p>

                  <p className="text-sm text-violet-100">
                    ₹50,000 credited successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}