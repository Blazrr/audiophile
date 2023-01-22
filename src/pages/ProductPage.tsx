import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  console.log(articles);
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
      <div className="mt-24 max-w-[1100px] mx-auto">
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
  );
};

export default ProductPage;
