import React from "react";
import { Card, CardDescription } from "./ui/card";

const navLinks: string[] = [
  "Daily Deals",
  "Gift Cards",
  "Help & Contact",
  "Ship to",
  "Sell",
  "Watchlist",
];

const NavLists = () => {
  return (
    <div className="flex flex-col border-gray-200">
      {navLinks.map((item, index) => (
        <Card
          key={index}
          className="px py-1 my-2 mx-1 cursor-pointer border-b rounded-none"
        >
          <CardDescription className="font-medium text-gray-800 items-center w-100 whitespace-nowrap text-center text-lg">
            {item}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default NavLists;
