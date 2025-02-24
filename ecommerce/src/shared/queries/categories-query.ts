import { useQuery } from "@tanstack/react-query";
import { CategoryInterface } from "@/types/interface";
import { fetchCategories } from "../api/fetch-categories";

export const useCategoryQuery = (url: string) => {
  const { data, isLoading, error } = useQuery<CategoryInterface[]>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(url),
  });

  return { data, isLoading, error };
};
