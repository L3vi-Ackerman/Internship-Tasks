import React from "react";
import { CardTitle } from "../ui/card";

const TextSkeleton = () => {
  return (
    <div className="flex flex-col">
      <CardTitle className="animate-pulse bg-gray-200 h-[30px] w-full mb-2 rounded-lg"></CardTitle>
      <CardTitle className="animate-pulse bg-gray-200 h-[20px] w-2/3 mb-2 rounded-lg"></CardTitle>
      <CardTitle className="animate-pulse bg-gray-200 h-[20px] w-1/2 mb-2 rounded-lg"></CardTitle>
    </div>
  );
};

export default TextSkeleton;
