export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface ProductStoreState {
  products: Product[];
  status: LoadingStatus;
  fetchProducts: () => Promise<void>;
}

export type LoadingStatus = "idle" | "loading" | "success" | "error";
