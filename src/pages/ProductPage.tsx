import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { article } from "../../typing";
import HomeHeroFour from "../components/Home/HomeHeroFour";
import Footer from "../components/Footer";
import Product from "../components/Commons/Product";
import HomeHero from "../components/Home/HomeHero";
import Backgrounds from "../components/Product/Backgrounds";
import AlsoLike from "../components/Product/AlsoLike";

type Props = {};

const ProductPage = (props: Props) => {
  const name = useParams().article;

  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });

  const tmp: article[] = articles.filter((item: article) => item.name == name);
  const article = tmp[0];
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  const addToCart = () => {
    const data = {
      count: count,
      itemName: article.name,
    };
    dispatch({ type: "ADD_TO_CART", payload: data });
    setCount(0);
  };

  return (
    <>
    {   article && window.location.pathname.includes(article.category) ?
     <>
        <div className=" max-w-[1300px] mx-auto">
          <div className="w-4/5 mx-auto mt-8 font-semibold">
          <Link to={article.category} className="text-[#787878]">Go Back</Link>

          </div>

        <Product
          count={count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          addToCart={addToCart}
          article={article}
        />
        <Backgrounds article={article} />
        <AlsoLike article={article} />
        <HomeHero />
        <HomeHeroFour />
      </div>
      <Footer />
      </>
      :
      <h1>erreur</h1>

    }
  
    </>
  );
};

export default ProductPage;
