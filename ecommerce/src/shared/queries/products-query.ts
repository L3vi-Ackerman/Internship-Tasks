import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetch-products";

import { fetchPropsInterface, ProductInterface } from "@/types/interface";

export const useProductQuery = ({
  id,
  categoryName,
}: fetchPropsInterface = {}) => {
  const { data, isLoading, error } = useQuery<ProductInterface[]>({
    queryKey: ["products", id, categoryName],
    queryFn: () => fetchProducts({ id: id, categoryName: categoryName }),
    enabled: true,
  });

  return { data, isLoading, error };
};
