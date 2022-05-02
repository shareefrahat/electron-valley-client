import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Suppliers from "../../components/Suppliers/Suppliers";

const Home = () => {
  return (
    <>
      <section className="">
        <Banner></Banner>
      </section>
      <section className="my-20 px-5 lg:px-10">
        <Services></Services>
      </section>
      <section className="my-20 px-5 lg:px-10">
        <Suppliers></Suppliers>
      </section>
    </>
  );
};

export default Home;
