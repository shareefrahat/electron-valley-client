import React from "react";
import { useParams } from "react-router-dom";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
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
          <div>
            <InventoryForm
              key={selectedProduct._id}
              product={selectedProduct}
            ></InventoryForm>
          </div>
        )}
      </section>
    </>
  );
};

export default Inventory;
