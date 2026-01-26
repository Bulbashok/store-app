import type { Product } from "../types/type";

const BASE_URL = "https://fakestoreapi.com";

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    description:
      "High-quality wireless headphones with noise cancellation and superior sound quality.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.5, count: 128 },
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    price: 449.99,
    description:
      "Advanced fitness tracking, heart rate monitoring, and smartphone integration.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.3, count: 89 },
  },
  {
    id: 3,
    title: "Organic Coffee Beans",
    price: 24.99,
    description:
      "Premium arabica coffee beans from sustainable farms with rich flavor profile.",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.7, count: 256 },
  },
  {
    id: 4,
    title: "Yoga Mat Premium",
    price: 79.99,
    description:
      "Non-slip, eco-friendly yoga mat with extra cushioning for comfortable practice.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.6, count: 167 },
  },
  {
    id: 5,
    title: "Leather Backpack",
    price: 189.99,
    description:
      "Genuine leather backpack with multiple compartments and laptop sleeve.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.4, count: 93 },
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 89.99,
    description:
      "Portable waterproof speaker with 360-degree sound and long battery life.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.2, count: 201 },
  },
  {
    id: 7,
    title: "Running Shoes",
    price: 129.99,
    description:
      "Lightweight running shoes with advanced cushioning and breathable mesh.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.5, count: 178 },
  },
  {
    id: 8,
    title: "Ceramic Plant Pots Set",
    price: 45.99,
    description:
      "Set of 3 handmade ceramic plant pots with drainage holes and saucers.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.8, count: 64 },
  },
  {
    id: 9,
    title: "Wireless Mouse",
    price: 59.99,
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.1, count: 142 },
  },
  {
    id: 10,
    title: "Stainless Steel Water Bottle",
    price: 34.99,
    description:
      "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.6, count: 223 },
  },
  {
    id: 11,
    title: "Cookbook Collection",
    price: 39.99,
    description:
      "Collection of international recipes with beautiful photography and easy instructions.",
    category: "Books",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.7, count: 156 },
  },
  {
    id: 12,
    title: "Fitness Resistance Bands",
    price: 29.99,
    description:
      "Set of 5 resistance bands with different resistance levels for full body workout.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.4, count: 198 },
  },
  {
    id: 13,
    title: "Ceramic Dinner Set",
    price: 89.99,
    description:
      "16-piece ceramic dinner set with modern design and dishwasher safe.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.5, count: 112 },
  },
  {
    id: 14,
    title: "Vintage Leather Jacket",
    price: 299.99,
    description: "Genuine leather jacket with classic design and modern fit.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.7, count: 89 },
  },
  {
    id: 15,
    title: "Organic Tea Collection",
    price: 34.99,
    description:
      "Assorted organic tea collection with 12 different flavors from around the world.",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop&auto=format",
    rating: { rate: 4.6, count: 203 },
  },
];

const mockCategories = [
  "Electronics",
  "Food",
  "Sports",
  "Fashion",
  "Home",
  "Books",
];

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.warn("Failed to fetch from server, using mock data:", error);
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 500);
  });
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.warn(
      "Failed to fetch categories from server, using mock data:",
      error,
    );
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCategories), 300);
  });
};
