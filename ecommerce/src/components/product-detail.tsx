"use client";
import { useProductQuery } from "@/shared/queries/products-query";
import { useParams } from "next/navigation";
import React from "react";

import { Card, CardDescription, CardImage, CardTitle } from "./ui/card";
import Button from "./ui/button";
import StarRating from "./rating";
import { discountPrice } from "./lib/compute-price";
import ProductDetailSkeleton from "./Loading/product-detail-skeleton";
export const ProductDetail = () => {
  const { id: id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useProductQuery({ id: Number(id) });

  if (isLoading) return <ProductDetailSkeleton />;
  if (error) {
    console.log(error);
    return <p>Error loading products</p>;
  }
  // return <ProductDetailSkeleton />;
  return (
    <>
      {product?.map((product) => (
        <Card
          key={product.id}
          className="w-full  flex flex-col p-2 lg:items-center lg:mx-auto mt-4 "
        >
          <div className="flex items-start justify-center flex-col md:flex-row lg:w-3/4">
            <CardImage className="h-full lg:h-[400px] lg:w-1/2">
              <img
                src={product.images[0]}
                alt={`${product.title} image`}
                className="w-full h-full object-cover"
              />
            </CardImage>

            {/* Content container */}
            <div className="card-content lg:w-1/2 mt-4 md:mt-0 mx-2 mb-4 md:ml-4">
              <CardTitle className="cursor-pointer text-2xl md:text-lg font-medium pb-2 mb-2 border-gray-200 border-b">
                {product.title}
              </CardTitle>
              <CardDescription className="mt-4 md:mt-2 text-lg md:text-sm">
                Brand: {product.brand}
              </CardDescription>
              {product.discountPercentage ? (
                <CardTitle className="text-3xl md:text-2xl cursor-text">
                  US ${discountPrice(product.price, product.discountPercentage)}
                </CardTitle>
              ) : (
                <CardTitle className="text-4xl md:text-2xl lg:text-3xl font-bold my-2 cursor-text">
                  ${product.price}
                </CardTitle>
              )}
              <CardTitle className="font-normal text-justifymy-4 border-gray-200 border-b text-xl md:text-base lg:text-sm mt-4 md:mt-2 ">
                {product.description}
              </CardTitle>

              <div className="flex flex-col gap-2">
                <CardTitle className="font-normal flex gap-2 items-center mt-4 md:text-base lg:text-xs ">
                  Rating: <StarRating rating={product.rating} />
                </CardTitle>
                <CardTitle className="font-normal md:text-base lg:text-xs ">
                  Shipping Information: {product.shippingInformation}
                </CardTitle>
                <CardTitle className="font-normal md:text-base lg:text-xs ">
                  Warranty Information: {product.warrantyInformation}
                </CardTitle>
                <CardTitle className="font-normal md:text-base lg:text-xs ">
                  Return Policy: {product.returnPolicy}
                </CardTitle>
              </div>

              <div className="buttons mt-4">
                <Button className="w-full py-1">Buy it Now</Button>
                <Button className="w-full py-1" variant="secondary">
                  Add to Cart
                </Button>
                <Button className="w-full py-1" variant="secondary">
                  See all details
                </Button>
              </div>
            </div>
          </div>

          <div className="comments mt-2 border-t border-gray-300 pt-4 w-full mx-2 lg:w-3/4">
            <h3 className="text-2xl md:text-xl lg:text-base font-medium">
              Customer Reviews
            </h3>
            {product.reviews?.length > 0 ? (
              product.reviews.map((review, index) => (
                <Card
                  key={index}
                  className="border-b border-gray-200 py-2 flex-col items-start gap-1 rounded-none"
                >
                  <div className="flex items-center gap-2">
                    <CardTitle className="font-semibold text-2xl md:text-xl lg:text-sm">
                      {review.reviewerName}
                    </CardTitle>
                    <CardDescription className="text-lg md:text-sm text-gray-500 font-medium">
                      ({new Date(review.date).toLocaleDateString()})
                    </CardDescription>
                  </div>
                  <StarRating rating={review.rating} />
                  <CardDescription className="text-black font-medium text-lg lg:text-sm my-2">
                    {review.comment}
                  </CardDescription>
                </Card>
              ))
            ) : (
              <p className="text-sm">No reviews yet.</p>
            )}
          </div>
        </Card>
      ))}
    </>
  );
};
