import * as React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none text-white ${className}`}
      {...props}
    />
  );
}