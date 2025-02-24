"use client";
import React from "react";
import { Input } from "./ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "./ui/button";
import Link from "next/link";
import CategoryDropdown from "./dropdown";
import DropDown from "./dropdown";
const NavSearchDiv = () => {
  return (
    <div className="search-bar w-full flex items-center justify-between  md:gap-4 p-2 lg:p-0">
      <Link href="/" className="w-1/2 md:w-auto">
        <div className="logo lg:w-full cursor-pointer">
          <h4 className="text-2xl md:text-base text-blue-500">e-Commerce</h4>
        </div>
      </Link>
      <div className="w-3/4 items-center md:hidden justify-start text-2xl">
        <div className="flex items-center justify-end gap-8 h-[20px]">
          <FontAwesomeIcon icon={faUser} className="text-gray-600" />
          <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600" />
          <DropDown isNavList={true} />
        </div>
      </div>
      <div className="w-2/4 items-center hidden md:flex">
        <div className="w-2/4 border-2 border-black rounded-full flex items-center bg-white  flex-grow">
          <div className="h-50 w-50 mx-4">
            <FontAwesomeIcon icon={faSearch} className="text-black" />
          </div>
          <Input
            placeholder="Search for anything"
            className="w-full border-none"
          />
        </div>
        <Button className="w-1/4 py-1">Search</Button>
      </div>
    </div>
  );
};

export default NavSearchDiv;
