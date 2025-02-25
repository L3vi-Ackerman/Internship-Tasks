import React from "react";
import { Card, CardDescription, CardImage, CardTitle } from "../ui/card";

const CategoriesSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="w-full flex items-start h-[40px] bg-white p-2 border-b border-gray-200 rounded-none"
        >
          <CardTitle className="animate-pulse bg-gray-200 h-[20px] w-full mb-2 rounded-lg"></CardTitle>
        </Card>
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
