import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Earphones from "./pages/Earphones";
import HeadPhones from "./pages/HeadPhones";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import { configureStore } from "@reduxjs/toolkit";
import { reducerArticles } from "./Data/reducerArticles";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import OrderComplete from "./pages/OrderComplete";



function App() {
  const store = configureStore({
    reducer: { reducerArticles },
  });

  

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<HeadPhones />} path="/Headphones" />
          <Route element={<Speakers />} path="/Speakers" />
          <Route element={<Earphones />} path="/Earphones" />
          <Route element={<OrderComplete/>} path="/OrderComplete" />   
          <Route path='/:pages/:article' element={<ProductPage />} />
          <Route path="/Checkout" element={<CheckoutPage/>} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Provider>
    </>
  );
}

export default App;
