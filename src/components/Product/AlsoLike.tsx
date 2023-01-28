import React from "react";
import { Link } from "react-router-dom";
import { article } from "../../../typing";

type Props = {
  article: article;
};

const AlsoLike = ({ article }: Props) => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold mt-8">
        YOU MAY ALSO LIKE
      </h2>
      <div className="flex justify-center flex-col md:flex-row items-center space-y-10 w-4/5 mx-auto md:justify-between md:space-y-0 md:space-x-4 mt-4">
        {article.alsoLike.map((item, id) => {
          return (
            <div key={id} className="md:w-[30%] w-full flex flex-col ">
              <div className="bg-[#F1F1F1] flex justify-center rounded-md items-center p-8 aspect-square   ">
                <img src={item.img} alt={item.alt} className="aspect-square" />
              </div>
              <h2 className="text-center text-xl mt-2 font-semibold">
                {item.title}
              </h2>
              <div className="flex justify-center mt-4">
                <Link
                  to={item.to}
                  className=" bg-orange-400  px-4 py-2 hover:bg-black text-white transition-all border-none "
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AlsoLike;
