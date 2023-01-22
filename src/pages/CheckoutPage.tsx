import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { article } from "../../typing";
import Footer from "../components/Footer";

type Props = {};

const CheckoutPage = (props: Props) => {
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
    <>
    <div className="mt-32">

      <div className="p-4 bg-white w-4/5 rounded-lg mx-auto">
        <h2 className="text-xl font-bold tracking-widest	">SUMMARY</h2>
        <div className="space-y-4 mt-4">
          {articles.map((item, id) => {
            return (
              <div
                key={id}
                className="flex justify-between items-center "
              >
                <div className="flex items-center w-1/5 max-w-[300px] ">
                  <img
                    src={item.img}
                    alt=""
                    className=" aspect-square bg-[#F1F1F1] p-2 rounded-md w-full h-full  "
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-lg font-bold ">
                      {item.name.toUpperCase()}
                    </p>
                    <p className="font-semibold min-w-[100px] text-[#f1f1f1] ">$ {item.price}</p>
                  </div>
                </div>

                <div className="flex justify-around   ">
                  <span className="text-[#f1f1f1] font-semibold">x{item.qty}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
