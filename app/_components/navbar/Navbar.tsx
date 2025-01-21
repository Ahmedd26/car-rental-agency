import Logo from "@/app/_components/Logo";
import UserAvatar from "@/app/_components/navbar/UserAvatar";
import SearchBar from "@/app/_components/navbar/SearchBar";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-white px-6 py-8 shadow-sm md:py-10 md:pe-8 md:ps-[60px]">
      <div className="me-0 md:me-16">
        <Logo />
      </div>
      <div className="order-3 mx-auto mt-8 w-full md:!order-none md:mx-0 md:mt-0 md:w-auto">
        <SearchBar />
      </div>
      <div className="md:flex md:flex-1 md:justify-end">
        <UserAvatar />
      </div>
    </nav>
  );
}
