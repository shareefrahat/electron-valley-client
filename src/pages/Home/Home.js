import React from "react";
import Banner from "../../components/Banner/Banner";
import Suppliers from "../../components/Suppliers/Suppliers";

const Home = () => {
  return (
    <>
      <section className="">
        <Banner></Banner>
      </section>
      <section className="my-10 px-5 lg:px-10">
        <Suppliers></Suppliers>
      </section>
    </>
  );
};

export default Home;
