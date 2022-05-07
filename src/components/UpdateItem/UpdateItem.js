import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateItem = ({ product }) => {
  const { _id, name, img, supplier, price, quantity, description } = product;
  const [reload, setReload] = useState(false);
  const [restock, setRestock] = useState();
  let [update, setUpdate] = useState({
    name: name,
    img: img,
    supplier: supplier,
    price: price,
    quantity: quantity,
    description: description,
  });

  const handleDeliver = () => {
    const newQuantity = --update.quantity;
    setUpdate({ quantity: newQuantity });
    setReload(!reload);
    toast.success("Quantity Updated!", { id: "quantityUpdated" });
  };

  const getRestock = (e) => {
    const restockInput = parseInt(e.target.value);
    setRestock(restockInput);
  };

  const handleRestock = () => {
    if (!restock || restock < 0) {
      toast.error("Invalid restock amount!", { id: "restockInput" });
      return;
    }
    const newQuantity = parseInt(update.quantity) + restock;
    setUpdate({ quantity: newQuantity });
    setReload(!reload);
    toast.success("Stock Updated!", { id: "stockUpdated" });
  };

  useEffect(() => {
    const url = `http://localhost:5000/update/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount !== 0) {
          setReload(!reload);
        }
      });
  }, [reload, _id, update]);

  return (
    <>
      <div className="my-10 w-fit mx-auto">
        <img src={img} className="w-40 mx-auto" alt="" />
        <p>Name: {name}</p>
        <p>Supplier: {supplier}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        <p>Quantity: {quantity}</p>

        <div className="my-5">
          <button
            onClick={handleDeliver}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Delivered
          </button>

          <div className="my-5">
            <label
              htmlFor="restock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Restock Amount
            </label>
            <input
              onChange={getRestock}
              type="number"
              id="restock"
              name="restock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter value"
              required
            />
            <button
              onClick={handleRestock}
              type="button"
              className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Restock
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
