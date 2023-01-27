import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { article } from "../../typing";
import Billing from "../components/Checkout/Billing";
import ConfirmedOrder from "../components/Checkout/ConfirmedOrder";
import Summary from "../components/Checkout/Summary";
import Footer from "../components/Footer";

type Props = {};

const CheckoutPage = ({}: Props) => {
  const tmp: article[] = useSelector((store: any) => {
    return store.reducerArticles;
  });
  const articles = tmp.filter((item) => item.qty > 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setOrderConfirned(true);
  };
  const [orderConfirmed, setOrderConfirned] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalItems = () => {
    let res = 0;
    for (let i = 0; i < articles.length; i++) {
      for (let j = 0; j < articles[i].qty; j++) {
        res += articles[i].price;
      }
    }
    setTotalPrice(res);
  };

  useEffect(() => {
    totalItems();
  }, [articles]);

  return (
    <>
      {orderConfirmed && (
        <>
          <div
            className="absolute w-screen bg-slate-300 bg-opacity-25 h-screen z-20 " ></div>

          <ConfirmedOrder articles={articles} total={totalPrice} />
        </>
      )}

      <div className="bg-[#f1f1f1]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-4/5 mx-auto lg:flex lg:space-x-8 pt-8 space-y-6 lg:space-y-0 ">
            <Billing register={register} errors={errors} />
            <Summary articles={articles} total={totalPrice} />
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
