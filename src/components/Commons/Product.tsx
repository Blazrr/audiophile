import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { article } from "../../../typing";

type Props = {
  count: number;
  incrementCount: any;
  decrementCount: any;
  addToCart: any;
  article: article;
};

const Product = ({
  count,
  incrementCount,
  decrementCount,
  addToCart,

  article,
}: Props) => {
  return (
    <div className="w-4/5 mx-auto ">
      <div className="md:flex items-center justify-center">
        <img
          src={article.img}
          alt={article.alt}
          className="md:w-1/2 w-full bg-[#f1f1f1] rounded-lg p-16"
        />

        <div className="space-y-6 mt-6 md:p-8">
          <h3 className="text-orange-300 ">NEW PRODUCT</h3>
          <h2 className="font-semibold text-2xl">{article.title}</h2>
          <p>{article.description}</p>
          <p className="mt-4 font-bold">$ {article.price}</p>

          <div className="flex items-center space-x-3">
            <div className="flex justify-around w-2/5 bg-slate-300 px-4 py-2 ">
              <span onClick={decrementCount} className="cursor-pointer">-</span>
              {count}
              <span onClick={incrementCount} className="cursor-pointer">+</span>
            </div>
            <button
              className=" bg-orange-400  px-4 py-2 hover:bg-black text-white transition-all border-none md:mx-auto "
              onClick={addToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-8 font-bold text-xl">FEATURES</h2>
          <p className="text-sm mt-4 text-slate-600">{article.p1}</p>
          <p className="mt-4 text-sm text-slate-600">{article.p2}</p>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-xl">IN THE BOX</h2>
          <div className="mt-4">
            {article.box.map((item, id) => {
              return (
                <div key={id} className="flex space-x-4">
                  <span className="text-orange-500">{item.number}x</span>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
