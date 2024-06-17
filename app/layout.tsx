import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import Sidebar from "@/components/sidebar";

import "./globals.css";

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

  const userData = JSON.parse(JSON.stringify(user));

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex">
            <Sidebar user={userData} />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
