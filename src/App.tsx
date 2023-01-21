import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Earphones from "./pages/Earphones";
import HeadPhones from "./pages/HeadPhones";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import { configureStore } from "@reduxjs/toolkit";
import { reducerArticles } from "./Data/reducerArticles";
import { Provider, useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage";



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
          <Route path='/:pages/:article' element={<ProductPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
