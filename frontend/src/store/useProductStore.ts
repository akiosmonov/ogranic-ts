import { ProductStoreState } from "@/types";
import { create } from "zustand";

export const useProductStore = create<ProductStoreState>()((set) => ({
  products: [],
  status: "idle",
  fetchProducts: async () => {
    set({ status: "loading" });
    setTimeout(() => {
      set({ status: "success", products: [] });
    }, 1000);
  },
}));
