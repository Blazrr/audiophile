import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  img: string;
  link: string;
  direction: string;
};

const SeeProduct = ({ title, description, img, link, direction }: Props) => {
  return (
    <div className={`flex flex-col w-4/5 mx-auto ${direction}  md:space-x-8 mt-16 `}>
      <img
        src={img}
        alt=""
        className="aspect-square bg-[#f0f0f0] rounded-lg  w-1/2  "
      />
      <div className="flex flex-col items-center justify-center w-1/2 p-10">
        <h3 className="tracking-widest text-orange-300 text-center font-semibold mt-4">
          NEW PRODUCT
        </h3>
        <h2 className="text-center font-bold text-2xl tracking-wider mt-2">
          {title}
        </h2>
        <p className="text-center text-slate-400 mt-4">{description}</p>
        <div className="mt-4 flex justify-center">
          <Link
            to={link}
            className=" px-6  py-2 bg-[#D87D4A] hover:bg-black hover:text-black border-none text-white transition-all border-slate-700 border-[1px] md:mx-auto "
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeProduct;
