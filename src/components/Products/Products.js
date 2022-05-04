import React from "react";
import useProducts from "../../hooks/useProducts";
import Spinner from "../Spinner/Spinner";

const Products = () => {
  const [products] = useProducts();
  console.log(products);
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
          <div>
            {products.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
