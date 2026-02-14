import React, { useState } from "react";
import { products } from "../../../../data/product";
import { useParams } from "react-router-dom";

const ShopSingle = () => {
  const [count, setCount] = useState(1);
  const { ProductId } = useParams();
  const filteredProduct = products.filter(
    (item) => item.id === Number(ProductId),
  );
  console.log(filteredProduct);

  return (
    <section className="bg-white">
      <div
        className="h-100 flex items-center justify-center"
        style={{
          backgroundImage: `url("/Banner Image.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h5 className="text-brand-dark text-4xl font-bold text-center">
          Shop Single
        </h5>
      </div>
      <div className="container mx-auto mt-40 px-4">
        {filteredProduct.map((item) => (
          <div
            key={item.id}
            className="flex gap-30 justify-center items-center"
          >
            <div className="bg-[#333131]">
              <span className="absolute bg-brand-dark text-white px-3 py-1 rounded-md text-sm font-semibold">
                {item.cat}
              </span>
              <img src={item.img} alt="" />
            </div>
            <div className="flex flex-col gap-5 max-w-150">
              <div className="flex gap flex-col">
                <h1 className="text-brand-dark text-3xl font-bold">
                  {item.name}
                </h1>
                <div className="flex text-[#FFA858] text-xs">{"★★★★★"}</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B8B8B8] line-through text-sm font-bold ">
                    {item.oldPrice}$
                  </span>
                  <span className=" text-brand-dark font-bold text-lg ">
                    {item.price}$
                  </span>
                </div>
              </div>
              <p className="text-[#525C60] font-light mb-8 leading-relaxed">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
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
        ))}
      </div>
    </section>
  );
};

export default ShopSingle;
