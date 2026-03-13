import React from "react";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-pink-400 underline text-white p-4">
        <div className="container mx-auto flex">
          <div className="flex justify-start items-center">
            <div className="flex px-2 space-x-5">
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
              <a href="/products" className="hover:text-gray-300">
                Products
              </a>
              <a href="/checkout" className="hover:text-gray-300">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl text-gray-200 font-bold mb-4">
          Welcome to My E-commerce Platform
        </h1>
        <p className="text-lg text-gray-200">
          Explore our wide range of products and enjoy seamless shopping
          experience.
        </p>
      </main>
    </>
  );
};
