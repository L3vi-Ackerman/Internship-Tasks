"use client"; // Ensure this is at the very top

import { CategoryInterface } from "@/types/interface";
import { useCategoryQuery } from "@/shared/queries/categories-query";
import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Link from "next/link";
import CategoriesSkeleton from "./Loading/categories-skeleton";

const CategoriesList = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useCategoryQuery("products/categories");

  if (isLoading) return <CategoriesSkeleton />;
  if (error) return <p>Error loading products</p>;

  // return <CategoriesSkeleton />;
  return (
    <div className="flex flex-col border-gray-200 md:border-r">
      {categories?.map((category: CategoryInterface) => (
        <Link href={`/category/${category.slug}`} key={category.name}>
          <Card
            key={category.name}
            className="px-2 py-1 mx-1 cursor-pointer border-b rounded-none"
          >
            <CardDescription className="font-medium text-gray-800 items-center w-100 whitespace-nowrap text-center text-lg md:text-sm">
              {category.name}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
