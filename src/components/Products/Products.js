import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

const Products = () => {
  const [products] = useProducts();

  const inventoryGoods = products?.slice(0, 6);
  return (
    <>
      <div>
        <p className="text-left text-md lg:text-xl font-semibold mb-2 text-blue-700">
          INVENTORY GOODS
        </p>
      </div>
      <hr className="bg-slate-400 h-[1.5px] mb-6 lg:mb-8" />
      <div className="my-5">
        {!products ? (
          <div>
            <Spinner></Spinner>
          </div>
        ) : (
          <div className="grid gird-cols-1 lg:grid-cols-3 gap-10 w-fit mx-auto">
            {inventoryGoods.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        )}
      </div>
      <div className="mt-20">
        <Link
          to="/manage"
          className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white   rounded-lg text-md lg:text-xl px-6 py-2.5 mr-2 mb-2  border border-blue-700 font-semibold"
        >
          Manage Inventory
        </Link>
      </div>
    </>
  );
};

export default Products;
