import React from "react";
import { Card, CardDescription, CardImage, CardTitle } from "../ui/card";
import TextSkeleton from "./text-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <Card className="w-full flex flex-col p-2 md:gap-2 xl:w-3/5 xl:mx-auto">
      <div className="container w-full flex flex-col md:flex-row md:gap-2 md:h-60">
        <CardImage className="h-[300px] md:w-1/2 md:h-full bg-gray-200 animate-pulse mb-2 "></CardImage>
        <TextSkeleton />
        <div className="card-content mt-4 md:w-1/2 md: gap-2">
          <TextSkeleton />
        </div>
      </div>
      <div className="container w-full flex md:gap-2 md:h-40 mt-8 xl:mt-4">
        <CardImage className="h-[100px] w-full md:h-full bg-gray-200 animate-pulse mb-2 "></CardImage>
        <TextSkeleton />
      </div>
    </Card>
  );
};

export default ProductDetailSkeleton;
