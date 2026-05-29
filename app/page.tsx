import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text">
          Kalpavruksha Wealth
        </h1>

        <p className="mt-4 text-gray-400">
          Premium Investment Portal
        </p>

        <Link
          href="/login"
          className="mt-8 inline-block px-8 py-4 rounded-2xl bg-violet-600"
        >
          Client Login
        </Link>
      </div>
    </div>
  );
}