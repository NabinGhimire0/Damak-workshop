import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <>
      <Header />
      <div className="text-center py-16">
        <h1 className="font-bold text-5xl text-gray-800 mb-6">
          Welcome to ReactShop
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-6 mx-auto">
          Discover Amazing product at unbeatable price. your one stop solution
          for everything you need.
        </p>
        <button>shop now</button>
      </div>
      <ProductList />
    </>
  );
};

export default App;
