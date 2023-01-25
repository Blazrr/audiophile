import {  useSelector } from "react-redux";
import { article } from "../../typing";
import Billing from "../components/Checkout/Billing";
import Summary from "../components/Checkout/Summary";
import Footer from "../components/Footer";

type Props = {};

const CheckoutPage = (props: Props) => {
  const tmp: article[] = useSelector((store: any) => {
    return store.reducerArticles;
  });
  const articles = tmp.filter((item) => item.qty > 0);
 
  const test = () => {
    console.log("test")
  }


  return (
    <div className="bg-[#f1f1f1]">
    <div className="w-4/5 mx-auto lg:flex lg:space-x-8 pt-8 space-y-6 lg:space-y-0 "> 
    <Billing test={test} />
    <Summary articles={articles} />   
    </div>
     
    <Footer/>
    </div>
  );
};

export default CheckoutPage;
