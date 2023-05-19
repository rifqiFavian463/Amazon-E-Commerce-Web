import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Contents from "./components/contents/Contents";
import Footer from "./components/Footer/Footer";
import { createContext, useState, useEffect } from "react";

export const productsContext = createContext([]);
function Home() {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  useEffect(() => {
    const parsed = JSON.stringify(products);
    localStorage.setItem("products", parsed);
  }, [products]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <Header />
      <Hero />
      <Contents />
      <Footer />
    </productsContext.Provider>
  );
}

export default Home;
