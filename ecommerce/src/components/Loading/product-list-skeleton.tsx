import React from "react";
import { Card, CardDescription, CardImage, CardTitle } from "../ui/card";
import TextSkeleton from "./text-skeleton";

const ProductListSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="w-full flex items-start mb-4 gap-4 h-[200px] md:h-[150px] bg-white p-2 border-b border-gray-400 rounded-none"
        >
          <CardImage className="h-full w-2/5 md:h-[130px] md:w-[130px] flex justify-center items-center bg-gray-200"></CardImage>
          <div className="h-full w-3/5 md:h-[200px] md:w-[300px] flex flex-col justify-start items-start  rounded-lg">
            <TextSkeleton />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductListSkeleton;
