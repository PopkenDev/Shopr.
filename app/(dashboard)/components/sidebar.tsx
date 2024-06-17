"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import UserProfile from "@/app/(dashboard)/components/user-profile";
import Separator from "@/components/ui/separator";
import { RiBox3Fill, RiDashboardFill } from "@remixicon/react";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    active: "/",
    icon: <RiDashboardFill className="h-5 w-5" />,
  },
  {
    label: "Products",
    href: "/products",
    active: "/products",
    icon: <RiBox3Fill className="h-5 w-5" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <aside className={`h-[calc(100svh-80px)] w-fit -translate-y-px`}>
        <div className="h-full w-full border-r border-teal-800 p-4 space-y-8">
          <UserProfile user={user} />
          <Separator />
          <nav className="flex flex-col gap-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-x-2 text-sm tracking-wide hover:text-teal-600 transition ${
                  item.active === pathname ? "text-teal-600" : "text-white"
                }`}
              >
                {item.icon}
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
