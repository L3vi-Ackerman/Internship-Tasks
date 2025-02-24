"use client";
import React from "react";
import { ProductList } from "@/components/product-list";

import CategoriesSlider from "@/components/categories-list";
import ProductListUI from "@/components/product-list-ui";
const page = () => {
  return <ProductListUI searchCategory={true} />;
};
export default page;
