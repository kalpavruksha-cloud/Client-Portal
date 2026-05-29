"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-violet-600/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="grid lg:grid-cols-2 glass rounded-[40px] overflow-hidden w-[1200px] z-10">
        <div className="p-16 flex flex-col justify-center">
          <h1 className="text-6xl font-black leading-tight gradient-text">
            Premium
            <br />
            Wealth Portal
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            Securely monitor investments, monthly returns,
            withdrawals and agreements with enterprise-grade analytics.
          </p>
        </div>

        <div className="bg-white/5 p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">
            Investor Login
          </h2>

          <p className="text-gray-400 mb-10">
            Welcome back to Kalpavruksha Wealth
          </p>

          <div className="space-y-5">
            <Input
              placeholder="Email Address"
              className="h-14 rounded-2xl bg-white/5 border-white/10"
            />

            <Input
              type="password"
              placeholder="Password"
              className="h-14 rounded-2xl bg-white/5 border-white/10"
            />

            <Button
               onClick={() => {
               window.location.href = "/dashboard";
               }}
               className="h-14 rounded-2xl bg-violet-600 hover:bg-violet-700 text-lg w-full"
             >
                Secure Login
             </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
