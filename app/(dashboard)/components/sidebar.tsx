"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import UserProfile from "@/app/(dashboard)/components/user-profile";
import Separator from "@/components/ui/separator";
import {
  RiArtboardFill,
  RiBookmarkFill,
  RiBox3Fill,
  RiDashboardFill,
} from "@remixicon/react";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    active: "/",
    icon: <RiDashboardFill className="h-5 w-5" />,
  },
  {
    label: "Banners",
    href: "/banners",
    active: "/banners",
    icon: <RiArtboardFill className="h-5 w-5" />,
  },
  {
    label: "Categories",
    href: "/categories",
    active: "/categories",
    icon: <RiBookmarkFill className="h-5 w-5" />,
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

  // if (!isLoaded) {
  //   // TODO Create loading animation here
  //   return (
  //     <aside className="h-[calc(100svh-80px)] w-64 -translate-y-px light-shadow">
  //       Loading...
  //     </aside>
  //   );
  // }

  return (
    <>
      <aside
        className={`h-[calc(100svh-80px)] w-64 -translate-y-px light-shadow`}
      >
        <div className="h-full w-full p-4 space-y-8">
          {isLoaded ? (
            <UserProfile user={user} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-y-4 h-[196px]">
              <div className="h-36 w-36 bg-[#444] rounded-full animate-pulse" />
              <div className="w-36 h-2 rounded-lg bg-[#444] animate-pulse" />
              <div className="w-44 h-2 rounded-lg bg-[#444] animate-pulse" />
            </div>
          )}

          <Separator />
          {isLoaded ? (
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
          ) : (
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-[#444] rounded-md mr-2" />
                <div className="w-32 h-2 bg-[#444] rounded-lg animate-pulse" />
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-[#444] rounded-md mr-2" />
                <div className="w-32 h-2 bg-[#444] rounded-lg animate-pulse" />
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-[#444] rounded-md mr-2" />
                <div className="w-32 h-2 bg-[#444] rounded-lg animate-pulse" />
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-[#444] rounded-md mr-2" />
                <div className="w-32 h-2 bg-[#444] rounded-lg animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
