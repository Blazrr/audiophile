import React, { useEffect, useState } from "react";
import { article } from "../../../typing";

type Props = {
  articles: article[];
};

const Summary = ({ articles }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const totalItems = () => {
    let res = 0;
    for (let i = 0; i < articles.length; i++) {
      for (let j = 0; j < articles[i].qty; j++) {
        res += articles[i].price;
      }
    }
    setTotalPrice(res);
  };

  useEffect(() => {
    totalItems();
  }, [articles]);
  return (
    <div className="space-y-4 bg-white p-8 rounded-lg">
      <h2 className="text-xl font-bold tracking-widest">SUMMARY</h2>

      {articles.map((item, id) => {
        return (
          <div key={id} className="flex justify-between items-center ">
            <div className="flex items-center w-1/5 max-w-[300px] ">
              <img
                src={item.img}
                alt=""
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
        <p>$ {totalPrice}</p>
      </div>
      <div className="flex justify-between">
        <p>SHIPPING</p>
        <p>$ 50</p>
      </div>
      <div className="flex justify-between">
        <p>VAT (INCLUDED)</p>
        <p>$ {totalPrice / 5}</p>
      </div>
      <div className="flex justify-between">
        <p>GRAND TOTAL</p>
        <p>$ 5,4446</p>
      </div>
      <input type="submit" />
    </div>
  );
};

export default Summary;
