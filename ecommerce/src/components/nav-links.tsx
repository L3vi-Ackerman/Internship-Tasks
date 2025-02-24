import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBell } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  return (
    <div className="w-full items-center justify-between text-[12px] hidden md:flex text-base lg:text-xs">
      <div className="w-1/2 left flex items-center gap-4 mt-2 cursor-pointer">
        <h4>
          Hi{" "}
          <Link href="#" className="text-blue-600 underline">
            Sign In
          </Link>{" "}
          or{" "}
          <Link href="#" className="text-blue-600  underline">
            Register
          </Link>
        </h4>
        <h4>Daily Deals</h4>
        <h4>Gift Cards</h4>
        <h4>Help & Contact</h4>
      </div>
      <div className="w-1/2 right flex items-center justify-end gap-4 cursor-pointer">
        <h4>Ship to</h4>
        <h4>Sell</h4>
        <h4>Watchlist</h4>
        <div className="icon w-[60px] flex gap-4 cursor-pointer bottom-0">
          <FontAwesomeIcon icon={faBell} className="text-blue-500" />

          <FontAwesomeIcon icon={faCartShopping} className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
