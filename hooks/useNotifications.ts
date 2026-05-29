"use client";

import { useEffect, useState } from "react";

export default function useNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data.notifications);
      });
  }, []);

  return {
    notifications,
  };
}