import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", href: "/", active: "/" },
    { label: "Products", href: "/products", active: "/products" },
  ];

  return (
    <aside className="flex items-end h-screen">
      <div
        className={`h-[calc(100svh-80px)] w-72 border-r border-teal-800 px-4`}
      >
        <figure>{/* <Image src="" fill alt="Profile-image" /> */}</figure>
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
  );
};

export default Sidebar;
