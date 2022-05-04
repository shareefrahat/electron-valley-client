import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import useProducts from "../../hooks/useProducts";

const Inventory = () => {
  const [products] = useProducts();
  const { id } = useParams("");

  const selectedProduct = products?.find((product) => product._id === id);

  return (
    <>
      <section>
        {!products ? (
          <div>
            <Spinner></Spinner>
          </div>
        ) : (
          <div>Product id: {selectedProduct?.name}</div>
        )}
      </section>
    </>
  );
};

export default Inventory;
