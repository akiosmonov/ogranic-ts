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
  price: string;
  oldPrice: string;
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

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const url = "https://69bba5a60915748735b9c879.mockapi.io/shop/shop";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get<Product[]>(url);
        setProducts(res.data);
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

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within ProductProvider");
  return context;
};
