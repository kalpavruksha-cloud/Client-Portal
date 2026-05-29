"use client";

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return {
    theme,
    setTheme,
  };
}