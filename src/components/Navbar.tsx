import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MobileNavbar from "./Home/MobileNavbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { AnimatePresence } from "framer-motion";
type Props = {};

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });

  localStorage.setItem("articles", JSON.stringify(articles));
  const [cart, setCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black  fixed top-0 w-full z-30 ">
      <div className=" flex items-center p-4 justify-between md:pt-6 lg:justify-around ">
        <div className="flex items-center">
          <div className="text-white lg:hidden cursor-pointer ">
            <GiHamburgerMenu
              className="md:w-6 md:h-6 w-4 h-4"
              onClick={() => setNavbar(!navbar)}
            />
          </div>
          <Link to="/" className="text-white md:ml-16  lg:ml-0 hidden md:block font-bold text-3xl">
            audiophile
          </Link>
        </div>
        <Link to="/" className="text-white md:ml-8 md:hidden font-bold text-2xl">
          audiophile
        </Link>
        <div className="space-x-4 text-white hidden lg:flex">
          <Link to="/">
            <span className="hover:text-xl transition-all hover:text-orange-500">
              HOME
            </span>
          </Link>
          <Link to="/Headphones">
            <span className="hover:text-xl transition-all hover:text-orange-500">
              HEADPHONES
            </span>
          </Link>
          <Link to="/Speakers">
            <span className="hover:text-xl transition-all hover:text-orange-500">
              SPEAKERS
            </span>
          </Link>
          <Link to="/Earphones">
            <span className="hover:text-xl transition-all hover:text-orange-500">
              EARPHONES
            </span>
          </Link>
        </div>

        <div className="text-white" onClick={() => setCart(true)}>
          <AiOutlineShoppingCart className="md:w-6 md:h-6 w-4 h-4 cursor-pointer" />
        </div>
      </div>

      <hr className="w-4/5 mx-auto border-slate-400" />
      <AnimatePresence>
      {navbar && <MobileNavbar setNavbar={setNavbar} />}
      </AnimatePresence>
      <AnimatePresence>
      {cart && (
        <>
          <Cart />
          <div className='top-16 absolute w-screen bg-slate-300 bg-opacity-25 h-[3000vh] z-10 ' onClick={() => setCart(false)}></div>
        </>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
