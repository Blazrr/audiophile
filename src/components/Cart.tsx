import {  motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { article } from "../../typing";

type Props = {
  cartFalse:any
};

const Cart = ({cartFalse}: Props) => {
  const tmp: article[] = useSelector((store: any) => {
    return store.reducerArticles;
  });
  const articles = tmp.filter((item) => item.qty > 0);
  const dispatch = useDispatch();
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
    <motion.div className="absolute top-40 bg-white rounded-lg  w-4/5 max-w-[500px] right-10   p-4 z-30"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1}}
     exit={{ opacity: 0 }}
     >
      {articles.length == 0 ? (
        <p className="text-center  text-xl">No article in your cart</p>
      ) : (
        <>
          <div className="flex justify-between ">
            <h2 className="font-semibold">CART ({articles.length})</h2>
            <h2
              className="cursor-pointer text-slate-300 underline"
              onClick={() => dispatch({ type: "REMOVE_ALL" })}
            >
              Remove all
            </h2>
          </div>
          <div className="space-y-4 mt-4">
            {articles.map((item, id) => {
              return (
                <div key={id} className="flex justify-between items-center space-x-6">
                  <div className="flex items-center w-full ">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className=" w-1/5 aspect-square bg-[#F1F1F1] p-2 rounded-md "
                    />
                    <div className="ml-4">
                      <p className="text-lg font-semibold ">
                        {item.name.toUpperCase()}
                      </p>
                      <p>$ {item.price}</p>
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="flex justify-around bg-[#F1F1F1] px-4 py-2 w-full">
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          dispatch({
                            type: "DECREMENT_ITEM",
                            payload: item.title,
                          })
                        }
                      >
                        -
                      </span>
                      <span>{item.qty}</span>
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          dispatch({
                            type: "INCREMENT_ITEM",
                            payload: item.title,
                          })
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between">
              <p>TOTAL</p>
              <p>$ {totalPrice}</p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                to={"/Checkout"}
                className=" bg-orange-400  px-4 py-2 hover:bg-black text-white transition-all border-none min-w-[200px] text-center "
                onClick={cartFalse}
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;
