import React from "react";

import { ProductList } from "./product-list";
import CategoriesList from "./categories-list";
import DropDown from "./dropdown";
interface propsInterface {
  searchCategory?: boolean | null;
}
const ProductListUI = ({ searchCategory }: propsInterface) => {
  return (
    <div className="w-full flex flex-col justify-start mx-auto p-2 md:w-4/5 md:items-center">
      <DropDown />
      <div className="w-full flex md:gap-2 justify-start">
        <div className="hidden categories-list md:block md:items-center md:justify-start md:w-1/5 ">
          <CategoriesList />
        </div>
        <div className="justify-center w-full flex-col md:w-2/3  items-center p-2">
          <ProductList searchCategory={searchCategory} />
        </div>
      </div>
    </div>
  );
};

export default ProductListUI;
