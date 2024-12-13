import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import NavBar from "@/components/Navbar";

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
      <body suppressHydrationWarning className="bg-gray-100 text-gray-800">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
