import type { Product } from "../types/type";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  return response.json();
};
