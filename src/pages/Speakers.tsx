import React from "react";
import Header from "../components/Commons/Header";
import SeeProduct from "../components/Commons/SeeProduct";
import { useSelector } from "react-redux";
import HomeHero from "../components/Home/HomeHero";
import Footer from "../components/Footer";
import HomeHeroFour from "../components/Home/HomeHeroFour";

type Props = {};

const Speakers = (props: Props) => {
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });
  return (
    <>
      <Header pageTitle="Speakers" />
      <div className="space-y-8 max-w-[1300px] mx-auto">
        <SeeProduct
          title={articles[4]?.title}
          alt={articles[4]?.alt}
          description={articles[4]?.description}
          img={articles[4]?.img}
          link="/Speakers/zx9"
          direction="md:flex-row"
        />
        <SeeProduct
          title={articles[3]?.title}
          alt={articles[3]?.alt}
          description={articles[3]?.description}
          img={articles[3]?.img}
          link="/Speakers/zx7"
          direction="md:flex-row-reverse"
        />
        <HomeHero />
        <HomeHeroFour />
      </div>
      <Footer />
    </>
  );
};

export default Speakers;
