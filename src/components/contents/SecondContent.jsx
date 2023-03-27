import React from "react";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { createContext, useContext } from "react";
import { productsContext } from "../../App";
import { motion } from "framer-motion";

function SecondContent() {
  return (
    <div className="flex flex-col w-[80%] mx-auto mt-[5%]">
      <div className="flex-col mx-auto text-center row-span-1">
        <img src={Plane} alt="Plane Design" className="w-[8rem]" />
        <h2 className="text-[1.8rem] font-bold">Our Feature Products</h2>
      </div>
      <ProductsCatalog />
    </div>
  );
}

const CatalogContext = createContext(null);
const ProductsCatalog = () => {
  const [originalCatalog, setOriginalCatalog] = useState(ProductsData);
  const [catalog, setCatalog] = useState(originalCatalog);
  const catalogLists = ["Skin Care", "Conditioner", "Foundation"];

  const handleProductCatalog = (name) => {
    const lowerCase = name.toLowerCase();
    if (lowerCase === "all") {
      setCatalog(originalCatalog);
    } else {
      setCatalog(originalCatalog.filter((product) => lowerCase === product.type));
    }
  };

  return (
    <CatalogContext.Provider value={{ catalog, handleProductCatalog }}>
      <div className="grid grid-cols-5 sm:grid-cols-1 mt-[1rem]">
        <RenderCatalogList catalogLists={catalogLists} />
        <RenderProducts />
      </div>
    </CatalogContext.Provider>
  );
};

const RenderCatalogList = ({ catalogLists }) => {
  const { handleProductCatalog } = useContext(CatalogContext);

  return (
    <div className="flex gap-y-6 mt-[2rem] sm:mt-[1rem] text-[1.2rem] font-[500] flex-col sm:flex-row sm:flex-wrap sm:gap-y-1 sm:gap-x-3 col-span-1">
      <span onClick={() => handleProductCatalog("All")} className="cursor-pointer hover:text-[#fe956f]">
        All
      </span>
      {catalogLists.map((list) => {
        return (
          <span key={list} onClick={() => handleProductCatalog(list)} className="cursor-pointer hover:text-[#fe956f]">
            {list}
          </span>
        );
      })}
    </div>
  );
};

const RenderProducts = () => {
  const { catalog } = useContext(CatalogContext);
  const { products, setProducts } = useContext(productsContext);
  const handleToCart = (item, itemId) => {
    const index = products.findIndex((product) => product.id === itemId);
    if (index !== -1) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        qty: updatedProducts[index].qty + 1,
      };
      setProducts(updatedProducts);
    } else {
      setProducts([...products, item]);
    }
  };

  return (
    <div className="col-span-4 h-[20rem] sm:h-[20rem] gap-x-5 gap-y-8 overflow-auto grid grid-cols-3 sm:grid-cols-1 mt-[2rem] pr-5">
      {catalog.map((item) => {
        return (
          <div key={item.id} className="grid bg-white col-span-1 h-[10rem] rounded-lg grid-rows-3 pl-[7%] overflow-hidden">
            <div className="flex flex-col row-span-1 justify-center">
              <span className="text-[1.3rem] font-[600]">{item.name}</span>
            </div>
            <div className="grid grid-cols-2 row-span-2">
              <div className="flex flex-col gap-y-1 col-span-1">
                <span className="text-[.7rem]">{item.details}</span>
                <span className="text-[1.6rem] font-[600]">{item.price}$</span>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleToCart(item, item.id)}
                  className="border-gray-600 border-[1px] text-[.65rem] w-[80px] p-[3px] rounded-[15px]  hover:bg-cyan-400 hover:text-white hover:border-none"
                >
                  Buy Now
                </motion.button>
              </div>
              <div className="flex justify-center col-span-1">
                <img src={item.img} alt="Product Image" className="-rotate-[20deg] h-56 sm:h-48" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondContent;
