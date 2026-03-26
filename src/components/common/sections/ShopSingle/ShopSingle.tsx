import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../PageBanner";
import { useProducts } from "@/context/ProductContext";
import { UseCart } from "@/context/CartContext";
import { Button } from "../../ui/Button";

const ShopSingle = () => {
  const { products, loading } = useProducts();
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const { addToCart } = UseCart();

  const product = products.find(
    (item) => String(item.id) === String(productId),
  );

  console.log(product);

  if (loading)
    return (
      <center>
        <div className="flex items-center justify-center">
          <h1 className="text-brand-dark text-4xl font-black">Загрузка...</h1>
        </div>
      </center>
    );

  if (!product)
    return (
      <center>
        <div className="flex items-center justify-center">
          <h1 className="text-brand-dark text-4xl font-black">
            Product not found
          </h1>
        </div>
      </center>
    );

  return (
    <section className="bg-white pb-20">
      <PageBanner title="Shop Single" bgImage="/Banner Image.svg" />

      <div className="container mx-auto mt-10 px-4 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className=" relative group">
            <div className="absolute top-6 left-6 z-10">
              <span className=" bg-brand-dark text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg">
                {product.cat}
              </span>
            </div>
            <div className=" overflow-hidden rounded-3xl bg-[#F9F8F8] p-8 md:p-12">
              <img
                src={product.img}
                className="w-full h-auto object-contain mix-blend-multiply transform transition-transform duration-500 group-hover:scale-105"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-brand-dark md:text-5xl text-3xl font-extrabold mb-2 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#FFA858] mb-7 text-xs tracking-widest">
                {"★★★★★"}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#B8B8B8] line-through text-lg font-bold opacity-60 ">
                  {product.oldPrice}$
                </span>
                <span className=" text-brand-dark font-black text-xl">
                  {product.price}$
                </span>
              </div>
            </div>

            <p className="text-[#525C60] text-lg font-normal mb-10 leading-relaxed max-w-xl">
              {product.desc}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center items-center gap-6 ">
              <span className="text-brand-dark text-lg font-bold">
                Quantity :
              </span>

              <div className="flex items-center rounded-xl border-2 border-brand-dark bg-white shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                  className="px-5 py-3 text-xl text-brand-dark hover:bg-gray-100 transition-colors border-r border-brand-dark"
                >
                  -
                </button>
                <span className="px-6 py-3 text-lg text-brand-dark font-bold select-none min-w-[60px] text-center">
                  {count}
                </span>
                <button
                  type="button"
                  onClick={() => setCount((prev) => Math.min(10, prev + 1))}
                  className="px-5 py-3 text-xl text-brand-dark hover:bg-gray-100 transition-colors border-l border-brand-dark"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              onClick={() => addToCart(product, count)}
              className="group mt-10 relative bg-brand-dark text-white px-8 py-5 rounded-xl font-bold flex items-center gap-3 overflow-hidden transition-all hover:pr-12 active:scale-95 shadow-xl shadow-brand-dark/20"
            >
              <span>Add To Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSingle;
