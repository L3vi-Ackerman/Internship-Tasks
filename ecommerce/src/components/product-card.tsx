import Link from "next/link";
import { discountPrice } from "./lib/compute-price";
import { Card, CardDescription, CardImage, CardTitle } from "./ui/card";
import { ProductInterface } from "@/types/interface";

interface ProductCardProps {
  product: ProductInterface;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`} key={product.id}>
      <Card className="w-full flex items-start mb-4 gap-2">
        <CardImage className="md:h-[150px] md:w-[200px] flex justify-center items-center">
          <img
            src={product.thumbnail}
            className="h-100 w-100 object-cover"
            alt={product.title}
          />
        </CardImage>
        <div className="w-full">
          <CardTitle className="font-medium hover:underline cursor-pointer text-xl lg:text-sm">
            {product.title}
          </CardTitle>
          <CardDescription className="text-gray-500 text-sm lg:text-xs">
            {product.brand}
          </CardDescription>
          {product.discountPercentage ? (
            <>
              <CardTitle className="text-3xl md:text-2xl font-bold">
                ${discountPrice(product.price, product.discountPercentage)}
              </CardTitle>
              <CardDescription className="text-blue-500 text-base md:text-xs">
                Was:<s> ${product.price}</s>
              </CardDescription>
            </>
          ) : (
            <CardTitle className="text-2xl font-bold my-2">
              ${product.price}
            </CardTitle>
          )}
          <CardDescription className="text-gray-600 text-base md:text-xs ">
            {product.shippingInformation}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
};
