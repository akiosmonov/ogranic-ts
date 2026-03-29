import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

export interface Product {
  id: number;
  cat: string;
  name: string;
  price: number;
  oldPrice: number;
  img: string;
  desc: string;
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
}

interface ProductContextType {
  products: Product[];
  loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

type ApiProduct = Omit<Product, "id" | "price" | "oldPrice" | "calories" | "proteins" | "fats" | "carbs"> & {
  id: number | string;
  price: number | string;
  oldPrice: number | string;
  calories: number | string;
  proteins: number | string;
  fats: number | string;
  carbs: number | string;
};

const toNumber = (value: number | string) => Number(value);

const normalizeProduct = (item: ApiProduct): Product => ({
  ...item,
  id: toNumber(item.id),
  price: toNumber(item.price),
  oldPrice: toNumber(item.oldPrice),
  calories: toNumber(item.calories),
  proteins: toNumber(item.proteins),
  fats: toNumber(item.fats),
  carbs: toNumber(item.carbs),
});

const PRODUCTS_URL = (() => {
  const custom = import.meta.env.VITE_API_URL;
  if (custom) return `${custom.replace(/\/$/, "")}/api/products`;
  if (import.meta.env.DEV) return "/api/products";
  return "https://69bba5a60915748735b9c879.mockapi.io/shop/shop";
})();

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get<ApiProduct[]>(PRODUCTS_URL);
        setProducts(res.data.map(normalizeProduct));
      } catch (err) {
        console.log("ОШИБКА:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components -- hook paired with ProductProvider
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within ProductProvider");
  return context;
};
