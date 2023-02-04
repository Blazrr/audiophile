import React from "react";
import Header from "../components/Commons/Header";
import SeeProduct from "../components/Commons/SeeProduct";
import { useSelector } from "react-redux";
import HomeHero from "../components/Home/HomeHero";
import Footer from "../components/Footer";
import HomeHeroFour from "../components/Home/HomeHeroFour";

type Props = {};

const HeadPhones = (props: Props) => {
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });

  return (
    <>
      <>
        <Header pageTitle="HeadPhones" />
        <div className="space-y-8 max-w-[1300px] mx-auto ">
          <SeeProduct
            title={articles[2]?.title}
            description={articles[2]?.description}
            img={articles[2]?.img}
            alt={articles[2]?.alt}
            link="/Headphones/xx99m2"
            direction="md:flex-row"
          />
          <SeeProduct
            title={articles[1]?.title}
            description={articles[1]?.description}
            img={articles[1]?.img}
            alt={articles[1]?.alt}
            link="/Headphones/xx99m1"
            direction="md:flex-row-reverse"
          />
          <SeeProduct
            title={articles[0]?.title}
            description={articles[0]?.description}
            img={articles[0]?.img}
            alt={articles[0]?.alt}
            link="/Headphones/xx59"
            direction="md:flex-row"
          />
          <HomeHero />
          <HomeHeroFour />
        </div>
        <Footer />
      </>
    </>
  );
};

export default HeadPhones;
