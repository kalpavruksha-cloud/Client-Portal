import ClientTable from "@/components/table/ClientTable";

export default function ClientsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Clients
      </h1>

      <div className="mt-8">
        <ClientTable />
      </div>
    </div>
  );
}