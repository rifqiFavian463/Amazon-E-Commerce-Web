import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderProducts } from "../../data/products";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { productsContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import Reviews from "./FourthContent";

// Content Component ()
export default function Contents() {
  return (
    <>
      <SliderContainer />
      <MainContent />
    </>
  );
}

// Slider Component
const SliderContainer = () => {
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="md:w-[75%] sm:mx-[5%] mx-auto sm:my-[5%] my-3%">
      <Slider {...settings}>
        {SliderProducts.map((item) => {
          return (
            <div key={item.id}>
              <div className="bg-white mr-3 ml-3 flex h-48 overflow-hidden rounded-lg box-border relative">
                <div className="left flex flex-col pl-[7%] mt-[5%]">
                  <span className="text-[1.4rem] font-[600]">{item.name}</span>
                  <span className="text-[.7rem]">{item.detail}</span>
                  <span className="pt-[20px] text-[2rem] font-[700]">{item.price}$</span>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="border-gray-600 border-[1px] text-[.65rem] mt-[15px] w-[80px] p-[3px] rounded-[15px]  hover:bg-cyan-400 hover:text-white hover:border-none"
                    onClick={() => handleToCart(item, item.id)}
                  >
                    Buy Now
                  </motion.button>
                </div>
                <img src={item.img} alt="Slider Products Image" className="h-[100%] -rotate-[20deg] content-border absolute right-[0%] -bottom-[20%]" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
function PrevArrow(props) {
  const { onClick } = props;
  return <MdKeyboardArrowLeft onClick={onClick} className="flex md:-left-[5%] sm:-left-[15%] bottom-[40%] absolute text-[50px] cursor-pointer" />;
}
function NextArrow(props) {
  const { onClick } = props;
  return <MdKeyboardArrowRight onClick={onClick} className="flex md:-right-[5%] sm:-right-[15%] bottom-[40%] absolute text-[50px] cursor-pointer" />;
}

const MainContent = () => {
  return (
    <>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <Reviews />
    </>
  );
};
