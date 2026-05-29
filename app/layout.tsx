import "./globals.css";

export const metadata = {
  title: "Kalpavruksha Wealth",
  description: "Premium Investment Client Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070b14] text-white">
        {children}
      </body>
    </html>
  );
}
