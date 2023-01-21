import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { article } from "../../typing";
import HomeHeroFour from "../components/Home/HomeHeroFour";
import Footer from "../components/Footer";
import Product from "../components/Commons/Product";
import HomeHero from "../components/Home/HomeHero";

type Props = {};

const ProductPage = (props: Props) => {
  const name = useParams().article;
  
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });

  const tmp: article[] = articles.filter((item: article) => item.name == name);
  const article = tmp[0];
  const dispatch = useDispatch()
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
      count:count,
      itemName: article.name
    }
    dispatch({type : "ADD_TO_CART" , payload :data });
    setCount(0)
  }

console.log(article)
  return <div className="mt-24">
    {article.title}
    <Product 
   count={count} incrementCount={incrementCount} 
    decrementCount={decrementCount} addToCart={addToCart}
    article={article} />
    <div className="flex w-4/5 mx-auto space-x-4 ">
   
       <div className="flex flex-col w-1/2 h-[400px] space-y-3">
          <div className={`bg-[url("${article.bg1}")] h-1/2 rounded-lg bg-center`}></div>
          <div className={`bg-[url("${article.bg2}")] h-1/2 rounded-lg bg-center`}></div>
       </div>

       <div className="w-1/2">
        <div className={`bg-[url("${article.bg3}")] h-full rounded-lg bg-center bg-no-repeat bg-cover`}></div>
       </div>

    
    </div>
    <HomeHero/>
    <HomeHeroFour/>
    <Footer/>
    </div>;
};

export default ProductPage;
