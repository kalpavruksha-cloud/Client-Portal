import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function NotificationsPage() {
  const notifications = [
    "Monthly payout credited successfully",
    "Agreement uploaded successfully",
    "Investment approved by admin",
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <Navbar />

        <h1 className="text-5xl font-black gradient-text mb-10">
          Notifications
        </h1>

        <div className="space-y-5">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}