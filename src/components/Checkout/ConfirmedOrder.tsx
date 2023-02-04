import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { article } from "../../../typing";
type Props = {
  articles: article[];
  total: number;
};

const ConfirmedOrder = ({ articles, total }: Props) => {
  console.log(articles[0]);
  const dispatch = useDispatch()
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[20%] z-50 bg-white p-6 flex flex-col space-y-4 rounded-lg ">
      <div className="flex">
        <p className="bg-orange-300 px-4 py-2  rounded-full">✔</p>
      </div>
      <h2 className="tracking-wider font-semibold text-2xl">
        THANK YOU FOR YOUR ORDER
      </h2>
      <p className="text-slate-400">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex rounded-xl w-full bg-slate-300">
        <div className=" w-1/2 p-4 ">
          <div>
            <div className="flex justify-between p-4">
              <img src={articles[0].img} alt={articles[0].alt} className="w-1/5" />
              <div className="flex flex-col">
                <p>{articles[0].title}</p>
                <p>{articles[0].price}</p>
              </div>
              <p>x{articles[0].qty}</p>
            </div>
          </div>
          {
            articles.length> 1 && <div className="flex space-y-2 flex-col">
              <hr className="w-4/5 mx-auto"/>
              <p className="text-center">and {articles.length-1} other item(s)</p>
            </div>
          }
        </div>

        <div className="bg-black w-1/2 p-4 rounded-xl">
          <p className="text-slate-300">GRAND TOTAL</p>
          <span className="text-white">${total}</span>
        </div>
      </div>
      
      <Link
        to="/"
        className="px-4 py-2  text-white transition-all border-slate-700 border-[1px] md:mx-auto bg-orange-400 hover:bg-orange-500 w-full text-center"
        onClick={() => dispatch({ type: "REMOVE_ALL"})}
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

export default ConfirmedOrder;
