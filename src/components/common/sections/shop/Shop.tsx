import React from "react";
import Newletter from "../Newletter";
const products = [
  {
    id: 1,
    cat: "Vegetable",
    name: "Calabrese Broccoli",
    oldPrice: "20.00",
    price: "13.00",
    img: "/Photo.svg",
  },
  {
    id: 2,
    cat: "Fresh",
    name: "Fresh Banana Fruits",
    oldPrice: "20.00",
    price: "14.00",
    img: "/Photo (1).svg",
  },
  {
    id: 3,
    cat: "Millets",
    name: "White Hazelnut",
    oldPrice: "20.00",
    price: "12.00",
    img: "/Photo (2).svg",
  },
  {
    id: 4,
    cat: "Vegetable",
    name: "Vegan Red Tomato",
    oldPrice: "20.00",
    price: "17.00",
    img: "/Photo (3).svg",
  },
  {
    id: 5,
    cat: "Health",
    name: "Mung Bean",
    oldPrice: "20.00",
    price: "11.00",
    img: "/Photo (1).svg",
  },
  {
    id: 6,
    cat: "Nuts",
    name: "Brown Hazelnut",
    oldPrice: "20.00",
    price: "12.00",
    img: "/Photo (2).svg",
  },
  {
    id: 7,
    cat: "Fresh",
    name: "Eggs",
    oldPrice: "20.00",
    price: "17.00",
    img: "/Photo (3).svg",
  },
  {
    id: 8,
    cat: "Fresh",
    name: "Zelery",
    oldPrice: "20.00",
    price: "11.00",
    img: "/Photo.svg",
  },
];

const Shop = () => {
  return (
    <>
      <section className="bg-white">
        <div
          className="h-100 flex items-center justify-center"
          style={{
            backgroundImage: `url("/images.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className=" text-center text-brand-dark text-5xl font-extrabold">
            Shop
          </h1>
        </div>
        <div className="container mx-auto mt-40 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F9F8F8] p-6 rounded-3xl relative hover:shadow-lg transition-all group cursor-pointer"
              >
                <span className=" absolute top-6 left-6 bg-brand-dark text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {item.cat}
                </span>
                <div className="h-64 flex items-center justify-center mb-4">
                  <img
                    src={item.img}
                    alt=""
                    className="max-h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <h3 className="text-brand-dark text-xl font-bold mb-3">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center border-t border-[#E0E0E0] pt-3">
                  <div className="flex gap-2 items-center">
                    <span className="text-[#B8B8B8] line-through text-sm font-bold ">
                      {item.oldPrice}$
                    </span>
                    <span className=" text-brand-dark font-bold text-lg ">
                      {item.price}$
                    </span>
                  </div>
                  <div className="flex text-[#FFA858] text-xs">{"★★★★★"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newletter />
    </>
  );
};

export default Shop;
