import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Contents from "./components/contents/Contents";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";

export const productsContext = createContext([]);
function Home() {
  const [products, setProducts] = useState([]);
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