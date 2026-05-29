import Sidebar from "@/components/layout/PremiumSidebar";
import Navbar from "@/components/layout/Navbar";

export default function AgreementsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[300px] p-8 w-full">
        <Navbar />

        <h1 className="text-5xl font-black gradient-text mb-10">
          Agreements
        </h1>

        <div className="glass rounded-3xl p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <h2 className="text-2xl font-bold">
                Premium Growth Plan
              </h2>

              <p className="text-gray-400 mt-2">
                Agreement Uploaded
              </p>
            </div>

            <button className="bg-violet-600 px-5 py-3 rounded-2xl">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}