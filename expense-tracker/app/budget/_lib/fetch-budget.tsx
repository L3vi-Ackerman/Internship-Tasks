import { useState, useEffect } from "react";

type FetchState<T> = {
  data: T;
  error: string | null;
  loading: boolean;
};

export const useFetchBudget = <T,>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: {} as T,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const jsonData: T = await response.json();
        setState({ data: jsonData, error: null, loading: false });
      } catch (error) {
        setState({
          data: {} as T,
          error: error instanceof Error ? error.message : "Unknown error",
          loading: false,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
