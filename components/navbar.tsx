import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-teal-800">
      <div className="h-full px-4 flex justify-between items-center">
        <div></div>
        <div></div>
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
