import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="flex justify-between place-items-center px-20 bg-black text-white w-full">
      <img className="mb-2 mt-6" src="/navbar-image.svg" alt="" />
      <nav className="flex place-items-center text-lg gap-x-6">
        <NavbarLink text={"Home"} />
        <NavbarLink text={"Features"} />
        <NavbarLink text={"Roadmap"} />
        <NavbarLink text={"Team"} />
        <button className=" bg-gradient-to-r from-[#AC32E4] via-[#7918F2] to-[#4801FF] hover:from-[#4801FF] hover:via-[#AC32E4] hover:to-[#7918F2] transition transform duration-500 ease-in-out  text-white text-base font-semibold px-4 py-2">
          Join our Discord
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
