import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="flex z-10 justify-between place-items-center px-20 bg-black text-white w-full">
      <img className="mb-2 mt-5" src="/navbar-image.svg" alt="" />
      <nav className="flex place-items-center text-lg gap-x-6">
        <NavbarLink text={"Home"} />
        <NavbarLink text={"Features"} />
        <NavbarLink text={"Roadmap"} />
        <NavbarLink text={"Team"} />
        <button className="btnColor text-base font-semibold px-4 py-2">
          Join our Discord
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
