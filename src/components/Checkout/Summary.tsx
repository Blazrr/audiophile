import React, { useEffect, useState } from "react";
import { article } from "../../../typing";

type Props = {
  articles: article[];
  total:number
};

const Summary = ({ articles,total }: Props) => {

  return (
    <div>
    <div className="space-y-4 bg-white p-8 rounded-lg">
      <h2 className="text-xl font-bold tracking-widest">SUMMARY</h2>

      {articles.map((item, id) => {
        return (
          
          <div key={id} className="flex justify-between items-center ">
            <div className="flex items-center w-1/5 max-w-[300px] ">
              <img
                src={item.img}
                alt={item.alt}
                className=" aspect-square bg-[#F1F1F1] p-2 rounded-md w-full h-full  "
              />
              <div className="ml-4 flex flex-col">
                <p className="text-lg font-bold ">{item.name.toUpperCase()}</p>
                <p className="font-semibold min-w-[100px] text-[#f1f1f1] ">
                  $ {item.price}
                </p>
              </div>
            </div>

            <div className="flex justify-around   ">
              <span className="text-[#f1f1f1] font-semibold">x{item.qty}</span>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between">
        <p>TOTAL</p>
        <p>$ {total}</p>
      </div>
      <div className="flex justify-between">
        <p>SHIPPING</p>
        <p>$ 50</p>
      </div>
      <div className="flex justify-between">
        <p>VAT (INCLUDED)</p>
        <p>$ {total / 5}</p>
      </div>
      <div className="flex justify-between">
        <p>GRAND TOTAL</p>
        <p>$ {total + 50}</p>
      </div>
      <button type="submit" className='px-4 flex py-2 hover:bg-transparent text-white transition-all hover:text-black border-slate-700 border-[1px] md:mx-auto bg-[#D87D4A]' >
          CONTINUE & PAY
        </button>

    </div>
    </div>
  );
};

export default Summary;
