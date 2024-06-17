import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Sidebar from "./(dashboard)/components/sidebar";

import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopr.",
  description: "Shopr. is a modern e-commerce platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="p-8">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
