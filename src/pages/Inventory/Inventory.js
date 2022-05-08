import React from "react";
import { useParams } from "react-router-dom";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import UpdateItem from "../../components/UpdateItem/UpdateItem";
import useProducts from "../../hooks/useProducts";

const Inventory = () => {
  const [products] = useProducts();
  const { id } = useParams("");

  const selectedProduct = products?.find((product) => product._id === id);

  return (
    <>
      <section className="my-5">
        <h3 className="text-lg lg:text-xl text-blue-700 font-bold border-b-4 border-b-blue-700 w-fit mx-auto py-2">
          Update Inventory
        </h3>
      </section>
      <section>
        {!products ? (
          ""
        ) : (
          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
            <div>
              <UpdateItem
                key={selectedProduct._id}
                product={selectedProduct}
              ></UpdateItem>
            </div>
            <div>
              <InventoryForm
                key={selectedProduct._id}
                product={selectedProduct}
              ></InventoryForm>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Inventory;
