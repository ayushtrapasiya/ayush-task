import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  tags: [],
  filters: {
    price: "",
    rating: "",
    tags: [],
  },

  fetchProducts: async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    const allTags = [...new Set(data.products.flatMap((p) => p.tags || []))];

    set({
      products: data.products,
      filteredProducts: data.products,
      tags: allTags,
    });
  },

  setFilter: (key, value) => {
    set((state) => {
      const newFilters = { ...state.filters, [key]: value };
      return {
        filters: newFilters,
        filteredProducts: applyFilters(state.products, newFilters),
      };
    });
  },
  clearAll: () => {
    const { products } = get();
    console.log("clicked");
    set({
      filters: {
        price: "",
        rating: "",
        tags: [],
      },
      filteredProducts: products,
    });
  },
  toggleTag: (tag) => {
    set((state) => {
      const updatedTags = state.filters.tags.includes(tag)
        ? state.filters.tags.filter((t) => t !== tag)
        : [...state.filters.tags, tag];

      const newFilters = { ...state.filters, tags: updatedTags };

      return {
        filters: newFilters,
        filteredProducts: applyFilters(state.products, newFilters),
      };
    });
  },
}));

function applyFilters(products, filters) {
  return products.filter((p) => {
    const priceMatch =
      !filters.price ||
      (filters.price === "low" && p.price < 20) ||
      (filters.price === "mid" && p.price >= 20 && p.price <= 50) ||
      (filters.price === "high" && p.price > 50);

    const ratingMatch =
      !filters.rating || Math.floor(p.rating) >= filters.rating;

    const tagsMatch =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => p.tags?.includes(tag));

    return priceMatch && ratingMatch && tagsMatch;
  });
}
