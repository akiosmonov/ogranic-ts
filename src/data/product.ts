export interface Product {
  id: number;
  cat: string;
  name: string;
  price: string;
  oldPrice: string;
  img: string;
  description?: string;
}

export const products: Product[] = [
  { id: 1, cat: "Vegetable", name: "Calabrese Broccoli", oldPrice: "20.00", price: "13.00", img: "/Photo.svg" },
  { id: 2, cat: "Fresh", name: "Fresh Banana Fruits", oldPrice: "20.00", price: "14.00", img: "/Photo (1).svg" },
  { id: 3, cat: "Millets", name: "White Hazelnut", oldPrice: "20.00", price: "12.00", img: "/Photo (2).svg" },
  { id: 4, cat: "Vegetable", name: "Vegan Red Tomato", oldPrice: "20.00", price: "17.00", img: "/Photo (3).svg" },
  { id: 5, cat: "Health", name: "Mung Bean", oldPrice: "20.00", price: "11.00", img: "/Photo (1).svg" },
  { id: 6, cat: "Nuts", name: "Brown Hazelnut", oldPrice: "20.00", price: "12.00", img: "/Photo (2).svg" },
  { id: 7, cat: "Fresh", name: "Eggs", oldPrice: "20.00", price: "17.00", img: "/Photo (3).svg" },
  { id: 8, cat: "Fresh", name: "Zelery", oldPrice: "20.00", price: "11.00", img: "/Photo.svg" },
];