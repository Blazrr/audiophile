import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { article } from "../../typing";
import HomeHeroFour from "../components/Home/HomeHeroFour";
import Footer from "../components/Footer";

type Props = {};

const ProductPage = (props: Props) => {
  const name = useParams().article;
  console.log(name);
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });

  const tmp: article[] = articles.filter((item: article) => item.name == name);
  const article = tmp[0];

  console.log(article);

  return <div className="mt-24">
    {article.title}
    <HomeHeroFour/>
    <Footer/>
    </div>;
};

export default ProductPage;
