import React from "react";
import NavLinks from "./nav-links";
import NavSearchDiv from "./nav-search";

const Navbar = () => {
  return (
    <nav className="w-full lg:w-4/5 flex flex-col items-center justify-center mx-auto border-b border-gray-400 p-2 md:px-4 ">
      <NavLinks />
      <NavSearchDiv />
    </nav>
  );
};

export default Navbar;
