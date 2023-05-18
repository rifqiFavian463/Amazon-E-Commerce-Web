import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./Header.css";
import { cartContext } from "./Header";
import { productsContext } from "../../Home";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Cart Component
export default function Cart() {
  const { products } = useContext(productsContext);
  const { isCartOpen, setIsCartOpen } = useContext(cartContext);
  return (
    <Transition.Root show={isCartOpen} as={Fragment} className="z-30">
      <Dialog as="div" className="relative z-10" onClose={setIsCartOpen}>
        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-yellow-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full sm:h-full flex-col shadow-xl cart">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 cart">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setIsCartOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <RenderProducts />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white md:px-6 md:py-6 sm:px-6 sm:py-6">
                      <div className="flex justify-between text-base font-medium text-gray-800">
                        <p>Subtotal</p>
                        <p>{products.reduce((acc, product) => acc + parseInt(product.price * product.qty), 0)}$</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <motion.a
                          whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.4 },
                          }}
                          whileTap={{ scale: 0.9 }}
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-cyan-400 text-gray-50 px-6 py-3 text-base font-medium shadow-sm hover:bg-[#fe956f] hover:text-gray-100 navList"
                        >
                          Checkout
                        </motion.a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button type="button" className="font-medium text-[#fe956f] hover:text-[#fe956f]" onClick={() => setIsCartOpen(false)}>
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// Render Products to Cart
const RenderProducts = () => {
  const { products, setProducts } = useContext(productsContext);
  const handleRemoveButton = (idProduct) => {
    setProducts(products.filter((product) => product.id !== idProduct));
  };
  return (
    <ul role="list" className="divide-y divide-white">
      <AnimatePresence>
        {products.map((product) => {
          return (
            <motion.li key={product.id} className="flex py-6" animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-100 bg-white">
                <img src={product.img} alt="Product Image" className="h-[140%] -rotate-[20deg] mt-[15px] ml-[30px]" />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-600">
                    <h3>
                      <a href="#">{product.name}</a>
                    </h3>
                    <p className="ml-4">{product.price}$</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-700">{product.detail}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-black">Qty {product.qty}</p>

                  <div className="flex">
                    <button type="button" className="font-medium text-gray-700 navList" onClick={() => handleRemoveButton(product.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
};
