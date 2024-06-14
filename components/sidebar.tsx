import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  userData: any;
}

const Sidebar: React.FC<SidebarProps> = async ({ userData }) => {
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
          <div className="space-y-4">
            <figure className="flex justify-center">
              <Image
                src={userData.imageUrl}
                height={200}
                width={200}
                alt="Profile-image"
                className="w-32 h-32 rounded-full border-2 border-white"
              />
            </figure>
            <figcaption>
              <h3 className="text-white font-semibold text-center">
                {userData.fullName}
              </h3>
              <p className="text-white/60 text-sm text-center">
                {userData.emailAddresses[0].emailAddress}
              </p>
            </figcaption>
          </div>
          <nav className="flex flex-col gap-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-sm tracking-wide hover:text-teal-600"
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
