import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, seProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => seProducts(data));
  }, []);
  return [products];
};

export default useProducts;
