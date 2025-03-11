import { useQuery, QueryClient } from "@tanstack/react-query";
import { fetchBook } from "../api/fetch-book";
import { fetchInterface } from "@/types/interface";
export const useBookQuery = (url: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["books"],
    queryFn: () => fetchBook(url),
  });
  return { data, isLoading, error };
};
