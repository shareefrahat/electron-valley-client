import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState();

  const email = user?.email;
  const url = `http://localhost:5000/userItems?owner=${email}`;

  useEffect(() => {
    const getItems = () => {
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    getItems();
  }, [user, url]);

  return (
    <div>
      <p>My Items is here {user?.email}</p>
      <div>
        {!products ? (
          <div>
            <Spinner></Spinner>
          </div>
        ) : (
          <div>
            {products?.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItems;
