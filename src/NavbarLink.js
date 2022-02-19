const NavbarLink = ({ text }) => {
  return (
    <div className="group relative">
      <a
        className="text-white hover:text-[#7918F2] transition-all ease-in-out duration-300"
        href="#"
      >
        {text}
      </a>
      <div className="flex justify-center items-center">
        <img
          className="absolute top-7 hidden group-hover:flex"
          src="/polygon.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default NavbarLink;
