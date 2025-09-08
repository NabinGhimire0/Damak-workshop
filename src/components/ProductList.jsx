import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <div className="py-8 px-4 mx-auto" >
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">Our Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
};

export default ProductList;
