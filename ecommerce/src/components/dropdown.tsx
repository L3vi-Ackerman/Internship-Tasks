"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react"; // Use any icon library
import CategoriesList from "./categories-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLists from "./nav-lists";
import clsx from "clsx";

interface propsInterface {
  isNavList?: boolean | null;
}
const DropDown = ({ isNavList }: propsInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Menu Icon Button */}
      <button
        className={clsx(
          " rounded-lg flex items-center transition-colors justify-center",
          isNavList ? "pt-2" : "bg-gray-200 hover:bg-gray-300 p-2 mb-4"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isNavList ? (
          <div className="h-[40px]">
            <FontAwesomeIcon icon={faBars} className="text-gray-600" />
          </div>
        ) : (
          <Menu size={15} />
        )}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div
          className={clsx(
            "absolute mt-2 w-48 bg-white shadow-lg border rounded-lg p-2 z-50",
            isNavList ? "right-0" : "left-0"
          )}
        >
          {isNavList ? <NavLists /> : <CategoriesList />}
        </div>
      )}
    </div>
  );
};

export default DropDown;
