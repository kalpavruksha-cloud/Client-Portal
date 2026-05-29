import Sidebar from "@/components/layout/PremiumSidebar";
import AdminStats from "@/components/admin/AdminStats";
import ClientTable from "@/components/table/ClientTable";

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <h1 className="text-5xl font-black gradient-text">
          Admin Dashboard
        </h1>

        <div className="mt-10">
          <AdminStats />
        </div>

        <div className="mt-10">
          <ClientTable />
        </div>
      </div>
    </div>
  );
}