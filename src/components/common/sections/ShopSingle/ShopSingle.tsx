import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../PageBanner";
import { useProducts } from "@/context/ProductContext";

const ShopSingle = () => {
  const { products, loading } = useProducts();
  const [count, setCount] = useState(1);
  const { ProductId } = useParams();

  const product = products.find((item) => item.id === ProductId);

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
    <section className="bg-white">
      <PageBanner title="Shop Single" bgImage="/Banner Image.svg" />

      <div className="container mx-auto mt-40 px-4">
        <div className="flex gap-30 justify-center items-center">
          <div className="bg-[#333131]">
            <span className="absolute bg-brand-dark text-white px-3 py-1 rounded-md text-sm font-semibold">
              {product.cat}
            </span>
            <img src={product.img} alt="" />
          </div>
          <div className="flex flex-col gap-5 max-w-150">
            <div className="flex gap flex-col">
              <h1 className="text-brand-dark text-3xl font-bold">
                {product.name}
              </h1>
              <div className="flex text-[#FFA858] text-xs">{"★★★★★"}</div>
              <div className="flex items-center gap-2">
                <span className="text-[#B8B8B8] line-through text-sm font-bold ">
                  {product.oldPrice}$
                </span>
                <span className=" text-brand-dark font-bold text-lg ">
                  {product.price}$
                </span>
              </div>
            </div>
            <p className="text-[#525C60] font-light mb-8 leading-relaxed">
              {product.desc}
            </p>
            <div className="flex items-center gap-5 ">
              <h4 className="text-brand-dark font-bold">Quantity :</h4>
              <h5 className=" text-xl text-brand-dark rounded-2xl border-2 border-brand-dark py-7 px-10">
                {count}
              </h5>
              <button className=" bg-brand-dark hover:scale-110 will-change-transform  text-white px-10 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all">
                Add To Cart
                <div className="bg-[#335B6B] hover:scale-105 cursor-pointer rounded-full w-15 h-15 flex items-center justify-center text-[10px]">
                  ➔
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSingle;
