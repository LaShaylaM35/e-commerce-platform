import React from "react";


export const Home = () => {
  return (
    <>
      <main className="container mx-auto p-4 text-center text-size-2xl text-gray-200">
        <h1 className="text-3xl text-gray-200 font-bold mb-4"> Welcome to My E-commerce Platform </h1>
        <p className="text-lg text-gray-200"> Explore our wide range of products and enjoy seamless shopping experience. </p>
        <h2 className= " text-2xl text-pink-300 p-10"> Trending Item </h2>

      <div className="flex items-center justify-center pt-5 pb-5 rounded-xl m-5 bg-gray-100">
        <div className="bg-white rounded-xl shadow-lg m-20 p-6 w-80 text-center">
          <img
            className="rounded-lg p-10 mb-4"
            src="/OPHS.jpg"
            alt="Product"
          />

          <h1 className="text-lg text-pink-200 font-bold mb-2">Omnilux</h1>

          <p className="text-blue-500 mb-4">$349.99</p>

          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-400">
            Buy Now
          </button>
        </div>
      </div>


      </main>
      
    </>
  );
};
