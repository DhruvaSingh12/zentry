import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zentry",
  description: "Building the Metagame to Power a Global Economy of Play",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-gray-100 text-gray-800">{children}</body>
    </html>
  );
}
