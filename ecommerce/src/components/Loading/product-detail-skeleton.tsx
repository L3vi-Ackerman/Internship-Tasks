import React from "react";
import { Card, CardDescription, CardImage, CardTitle } from "../ui/card";
import TextSkeleton from "./text-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <Card className="w-full flex flex-col p-2 md:gap-2 md:w-3/5 md:mx-auto gap-4 ">
      <div className="content lg:flex lg:gap-2">
        <CardImage className="w-full lg:w-1/2 h-[300px]"></CardImage>
        <div className="text-container lg:w-1/2 my-2 lg:my-0">
          <TextSkeleton />
          <TextSkeleton />
        </div>
      </div>
      <div className="review-section">
        <CardImage className="w-full h-[200px]"></CardImage>
      </div>
    </Card>
  );
};

export default ProductDetailSkeleton;
