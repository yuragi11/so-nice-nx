import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

// Backend API URL
// Vercel:
// VITE_API_URL=https://so-nice-nx.onrender.com/api
//
// Local:
// VITE_API_URL=http://localhost:5000/api

const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export interface ApiProduct {
  _id: string;
  name: string;
  category: "Women" | "Men" | "Kids" | "Winter";
  subcategory: string;
  gender: "Women" | "Men" | "Kids" | "Unisex";
  description: string;
  price: number;
  image: string;
  featured: boolean;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiContact {
  _id: string;
  name: string;
  phone?: string;
  email?: string;
  message: string;
  createdAt: string;
}

export interface ContactInput {
  name: string;
  phone?: string;
  email?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  count?: number;
}

async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));

    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

export const productApi = {
  getAll: (category?: string, search?: string) => {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (search) {
      params.set("search", search);
    }

    const query = params.toString() ? `?${params.toString()}` : "";

    return request<ApiProduct[]>(`/products${query}`);
  },

  getFeatured: () =>
    request<ApiProduct[]>("/products/featured"),

  getById: (id: string) =>
    request<ApiProduct>(`/products/${id}`),
};

export const contactApi = {
  submit: (data: ContactInput) =>
    request<ApiContact>("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

export const storeApi = {
  get: () => request<unknown>("/store"),
};
