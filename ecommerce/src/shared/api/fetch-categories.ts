import axios from "axios";
export const fetchCategories = async <T>(url: string): Promise<T[]> => {
  const response = await axios.get(`https://dummyjson.com/${url}`);
  console.log(response);
  return response.data;
};
