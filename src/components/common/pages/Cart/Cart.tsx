import React, { useState } from "react";
import PageBanner from "../../sections/PageBanner";
import { Button } from "../../ui";
import { UseCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const initialCart = [
  {
    id: "1",
    name: "Calabrese Broccoli",
    price: 13,
    qty: 2,
    img: "/Image (16).svg",
  },
  {
    id: "2",
    name: "Fresh Banana Fruits",
    price: 14,
    qty: 1,
    img: "/Image.svg",
  },
];

const Cart = () => {
  const { cartItems, removeFromCart } = UseCart();

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.qty),
    0,
  );

  return (
    <>
      <div className="bg-[#f5f5f5]">
        <PageBanner title="Cart" bgImage="/Image (13).svg" />
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 flex flex-col gap-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-6 gap-4"
                  >
                    <div className="flex items-center gap-6">
                      <Link to={`/shopSingle/${item.id}`}>
                        <div className="w-24 h-24 bg-[#F9F8F8] rounded-2xl shrink">
                          <img
                            src={item.img}
                            className="w-full h-full object-contain p-2"
                            alt=""
                          />
                        </div>
                      </Link>
                      <div className="">
                        <h3 className="text-[#274C5B] font-black text-xl">
                          {item.name}
                        </h3>
                        <p className="text-[#525C60] font-bold">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center border border-[#ABABAB] rounded-xl px-4 py-2">
                        <span className="text-[#274C5B] font-bold">
                          {item.qty}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#274C5B] hover:text-red-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:w-1/3 bg-[#F9F8F8] p-10 rounded-2xl h-fit">
                <h2 className="text-[#274C5B] font-black text-3xl">
                  Cart Totals
                </h2>
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-[#274C5B] font-bold">Subtotal</span>
                    <span className="text-[#274C5B] font-black">
                      ${total}.00
                    </span>
                  </div>
                </div>

                <Button className="w-full py-6 text-xl shadow-md">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-[#274C5B] font-black text-4xl mb-6">
                Your Cart is Empty
              </h2>
              <Button onClick={() => window.history.back()}>
                Back to Shop
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
