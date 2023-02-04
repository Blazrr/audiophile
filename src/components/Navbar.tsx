import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MobileNavbar from "./Home/MobileNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { AnimatePresence } from "framer-motion";
import { supabase } from "../supabaseClient";
type Props = {};

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });

  localStorage.setItem("articles", JSON.stringify(articles));
  const [cart, setCart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length == 0) {
      const fetchData = async () => {
        const { data, error } = await supabase.from("data").select("data");
        if (error) {
          console.log(error);
        }
        if (data) {
          dispatch({ type: "FETCH_ARTICLES", payload: data[0] });
        }
      };
      fetchData();
    }
  }, []);
  return (
    <>
      <div className="bg-[#191919]  w-full z-10 p-4 ">
        <div className=" flex items-center  justify-between lg:justify-around ">
          <div className="flex items-center p-2 ">
            <div className="text-white lg:hidden cursor-pointer ">
              <GiHamburgerMenu
                className="md:w-8 md:h-8 lg:w-10 lg:h-10 w-4 h-4"
                onClick={() => setNavbar(!navbar)}
              />
            </div>
            <Link
              to="/"
              className="text-white md:ml-16  lg:ml-0 hidden md:block font-bold text-3xl "
              onClick={() => setCart(false)}
            >
              audiophile
            </Link>
          </div>
          <Link
            to="/"
            className="text-white md:ml-8 md:hidden font-bold text-2xl"
            onClick={() => setCart(false)}
          >
            audiophile
          </Link>
          <div className="space-x-4 text-white hidden lg:flex">
            <Link to="/" onClick={() => setCart(false)}>
              <span className=" transition-all hover:text-orange-500 md:text-xl">
                HOME
              </span>
            </Link>
            <Link to="/Headphones" onClick={() => setCart(false)}>
              <span className="transition-all hover:text-orange-500 md:text-xl">
                HEADPHONES
              </span>
            </Link>
            <Link to="/Speakers" onClick={() => setCart(false)}>
              <span className=" transition-all hover:text-orange-500 md:text-xl">
                SPEAKERS
              </span>
            </Link>
            <Link to="/Earphones" onClick={() => setCart(false)}>
              <span className=" transition-all hover:text-orange-500 md:text-xl">
                EARPHONES
              </span>
            </Link>
          </div>

          <div className="text-white" onClick={() => setCart(true)}>
            <AiOutlineShoppingCart className="md:w-8 md:h-8 lg:w-10 lg:h-10 w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {navbar && <MobileNavbar setNavbar={setNavbar} />}
      </AnimatePresence>
      <AnimatePresence>
        {cart && (
          <>
            <Cart cartFalse={() => setCart(false)} />
            <div
              className="fixed w-screen bg-slate-300 bg-opacity-25 h-full top-0 overflow-auto  z-20 justify-center "
              onClick={() => setCart(false)}
            ></div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
