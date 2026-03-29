import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <section className="bg-white pb-20">
        <PageBanner title="Shop Single" bgImage="/Banner Image.svg" />

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto bg-[#F9F8F8] rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <div className="mx-auto mb-6 h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
              <span className="text-2xl text-brand-dark font-black">!</span>
            </div>

            <h1 className="text-brand-dark text-3xl md:text-5xl font-black leading-tight mb-4">
              Product not found
            </h1>
            <p className="text-[#525C60] text-base md:text-lg leading-relaxed mb-8">
              The product you’re looking for doesn’t exist or may have been removed.
              Try going back to the shop and selecting a different item.
            </p>

            <Link to="/shop" className="inline-flex">
              <Button className="bg-brand-dark text-white px-8 py-5 rounded-xl font-bold shadow-lg shadow-brand-dark/20 active:scale-95">
                Go Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>
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

            <div className="grid grid-cols-1 items-center mb-10 sm:grid-cols-4 gap-4 py-6 border-t border-b border-gray-100 ">
              <div className=" flex flex-col ">
                <span className="text-sm text-gray-400 font-medium ">Colories</span>
                <span className="text-xl font-bold text-primary ">
                  {product.calories} kcal
                </span>
              </div>
              <div className=" flex flex-col ">
                <span className="text-sm text-gray-400 font-medium ">Proteins</span>
                <span className="text-xl font-bold text-primary ">
                  {product.proteins} kcal
                </span>
              </div>
              <div className=" flex flex-col ">
                <span className="text-sm text-gray-400 font-medium ">Fats</span>
                <span className="text-xl font-bold text-primary ">
                  {product.fats} kcal
                </span>
              </div>

            </div>

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
