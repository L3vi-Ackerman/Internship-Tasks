import { fetchInterface } from "@/types/interface";
export const fetchBook = async (url: string) => {
  const response = await fetch(`http://localhost:8000/api/${url}/`);
  const data = await response.json();
  return data;
};
