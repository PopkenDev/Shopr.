import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Sidebar from "@/components/sidebar";

import "./globals.css";
import { currentUser } from "@clerk/nextjs/server";

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
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex">
            <Sidebar userData={user} />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
