import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Contents from "./components/contents/Contents";
import Footer from "./components/Footer/Footer";

export const productsContext = createContext([]);
function App() {
  const [count, setCount] = useState(0);
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

export default App;
