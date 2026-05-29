"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <div className="space-y-5">
      <Input placeholder="Email Address" />

      <Input
        type="password"
        placeholder="Password"
      />

      <Button
        className="w-full h-14 bg-violet-600 rounded-2xl"
        onClick={() => {
          window.location.href = "/dashboard";
        }}
      >
        Secure Login
      </Button>
    </div>
  );
}