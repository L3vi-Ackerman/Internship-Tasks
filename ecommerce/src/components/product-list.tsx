"use client";
import { useProductQuery } from "@/shared/queries/products-query";
import { ProductCard } from "./product-card";
import { useParams } from "next/navigation";
import ProductListSkeleton from "./Loading/product-list-skeleton";
import clsx from "clsx";

interface productListInterface {
  searchCategory?: boolean | null;
}
export const ProductList = ({ searchCategory }: productListInterface) => {
  let categoryName: string | null = null;
  const params = useParams<{ categoryName: string }>();
  if (searchCategory) {
    categoryName = params.categoryName || null;
  }
  const {
    data: products,
    isLoading,
    error,
  } = useProductQuery({ categoryName });

  if (isLoading) return <ProductListSkeleton />;
  if (error) {
    console.log(error);
    return <p>Error loading products</p>;
  }

  // return <ProductListSkeleton />;
  return (
    <>
      <div className={clsx("text-xl font-bold", categoryName && "hidden mb-4")}>
        {categoryName?.toUpperCase()}
      </div>
      <div className="lg:grid lg:grid-cols-2 ">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
