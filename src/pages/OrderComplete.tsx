import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { article } from '../../typing';
import ConfirmedOrder from '../components/Checkout/ConfirmedOrder'

type Props = {}

const OrderComplete = (props: Props) => {

    const tmp: article[] = useSelector((store: any) => {
        return store.reducerArticles;
      });
      const articles = tmp.filter((item) => item.qty > 0);
    

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
    <div> <div className="fixed w-screen bg-slate-300 bg-opacity-25 h-full top-0 overflow-auto  z-20 justify-center  "></div>
    <ConfirmedOrder articles={articles} total={totalPrice}/></div>
  )
}

export default OrderComplete