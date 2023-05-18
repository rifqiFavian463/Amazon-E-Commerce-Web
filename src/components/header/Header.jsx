import React from "react";
import Cart from "./Cart";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { productsContext } from "../../Home";
import { useState, useContext, createContext } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const cartContext = createContext(false);
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [parent] = useAutoAnimate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleClickNav = () => {
    setIsOpen(!isOpen);
  };
  const nav = ["Collections", "Brands", "New", "Sales", "Contact"];
  const { products } = useContext(productsContext);

  return (
    <cartContext.Provider value={{ isCartOpen, setIsCartOpen }} className="border-gray-200 px-2 py-2.5 rounded dark:bg-gray-900 overflow-x-hidden">
      <div className="justify-between sm:container flex sm:flex-wrap items-center pl-4 pr-3 py-2 overflow-x-hidden">
        <a href="#" className="flex items-center mt-3 md:ml-3">
          <img src={Logo} className="imgLogo" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap dark:text-white brandName ml-4 sm:text-sm">Amazon</span>
        </a>
        <div className="sm:w-26 z-10 md:flex sm:absolute sm:left-[17rem] sm:top-4 sm:bg-white sm:rounded sm:text-center sm:align-center md:pr-3" id="navbar-default">
          <HamburgerButton onClick={handleClickNav} />
          <ul ref={parent} className={"flex flex-col pr-3 sm:w-24 sm:items-center md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700 pb-5 text-xl pl-3 md:mt-3"}>
            <NavBarList list={nav} display="sm:hidden" />
            {isOpen && <NavBarList list={nav} display="md:hidden" />}
          </ul>
          <CgShoppingBag
            onClick={() => setIsCartOpen(true)}
            className={
              isOpen
                ? "text-xl mt-1 sm:mt-3 mb-4 ml-9 md:mt-4 cursor-pointer text-sm font-medium text-slate-700"
                : " text-sm font-medium text-slate-700 text-xl mt-1 sm:relative cgshoppingbag sm:bottom-4 md:mt-[2.5%] md:mr-3 cursor-pointer text-[23px]"
            }
          />
          {products.length !== 0 && (
            <span className="flex relative bg-red-500 text-white p-[.5%] h-[20px] w-[20px] text-[.7rem] sm:hidden rounded-full items-center justify-center -left-5 top-1">{products.length}</span>
          )}
          {products.length !== 0 && (
            <span className="flex absolute bg-red-500 text-white p-[.5%] h-[20px] w-[20px] text-[.7rem] md:hidden rounded-full items-center justify-center right-6 bottom-7">{products.length}</span>
          )}
        </div>
      </div>
      <Cart />
    </cartContext.Provider>
  );
};

// Render NavbarList
const NavBarList = ({ list, display }) => {
  return list.map((every) => {
    return (
      <li key={every} className={display}>
        <a href="#" className="block pt-5 sm:text-base md:text-base rounded md:bg-transparent md:text-gray-700 md:p-0 navList text-lg" aria-current="page">
          {every}
        </a>
      </li>
    );
  });
};

// Hamburger Menu
const HamburgerButton = ({ onClick }) => {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="md:hidden inline-flex items-center pt-2 ml-3 mr-3 text-sm text-black-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};
export default Header;
