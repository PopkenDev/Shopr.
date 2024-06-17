"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import UserProfile from "@/components/user-profile";
import Separator from "@/components/ui/separator";

interface SidebarProps {
  user: any;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathname = usePathname();
  const navItems = [
    { label: "Dashboard", href: "/", active: "/" },
    { label: "Products", href: "/products", active: "/products" },
  ];

  return (
    <>
      {/* Sidemenu button */}
      <aside className="flex items-end h-screen">
        <div
          className={`h-[calc(100svh-80px)] w-72 border-r border-teal-800 p-4 space-y-8`}
        >
          <UserProfile user={user} />
          <Separator />
          <nav className="flex flex-col gap-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white text-sm tracking-wide hover:text-teal-600 ${
                  item.active === pathname ? "text-teal-600" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
