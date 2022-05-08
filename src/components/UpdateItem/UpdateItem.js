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
    const url = `https://electron-valley.herokuapp.com/update/${_id}`;
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
      <div className="my-10 w-fit mx-auto bg-white border border-blue-700 rounded p-5">
        <div>
          <h2 className="text-lg lg:text-xl font-semibold font-serif text-blue-700 border border-blue-700 py-2 rounded mb-10">
            Update Stock
          </h2>
        </div>
        <div className="border border-slate-300 my-5">
          <img
            className="w-[200px] h-[200px] mx-auto rounded-md p-4"
            src={img}
            alt=""
          />
        </div>
        <div className="w-[300px] my-5">
          <div className="flex flex-row justify-between items-center">
            <p className="text-md lg:text-xl text-slate-600">{supplier}</p>
            <p className="text-md lg:text-xl  text-slate-500">
              <span className="text-red-700 font-semibold">${price}</span>
              /Unit
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 mt-4">
            <p className="text-lg lg:text-xl text-left font-semibold text-slate-700">
              {name}
            </p>
            <p className="mx-auto text-left text-lg relative overflow-ellipsis font-serif">
              {description}
            </p>
            <p className="text-md lg:text-xl text-slate-600">
              Quantity: <span className="text-blue-700">{quantity}</span>
            </p>
          </div>
        </div>
        <div className="my-5">
          <button
            onClick={handleDeliver}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-md"
          >
            Delivered
          </button>

          <div className="my-5">
            <label
              htmlFor="restock"
              className="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Restock Quantity:
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
              className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-md"
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
