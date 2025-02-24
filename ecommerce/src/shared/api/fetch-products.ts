import { fetchPropsInterface, ProductInterface } from "@/types/interface";
import axios from "axios";

export const fetchProducts = async ({
  id,
  categoryName,
}: fetchPropsInterface): Promise<ProductInterface[]> => {
  let endpoint = "products";
  if (id) endpoint = `products/${id}`;
  else if (categoryName) endpoint = `products/category/${categoryName}`;

  const response = await axios.get(`https://dummyjson.com/${endpoint}`);
  const data = response.data;

  if (Array.isArray(data.products)) {
    return data.products; // Case when response contains an array in "products"
  } else if (Array.isArray(data)) {
    return data; // Case when response is a direct array
  } else {
    return [data] as ProductInterface[]; // Case when response is a single object
  }
};
