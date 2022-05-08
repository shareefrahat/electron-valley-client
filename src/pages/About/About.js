import React from "react";

const About = () => {
  return (
    <div>
      <section className="my-5">
        <h3 className="text-lg lg:text-xl text-blue-700 font-bold border-b-4 border-b-blue-700 w-fit mx-auto py-2">
          About Us
        </h3>
      </section>
      <section className="lg:w-1/2 mx-auto px-5">
        <div className="text-justify border border-blue-700 rounded p-5 lg:text-xl">
          <div>
            <h4 className="font-semibold text-center mb-5">Our Statement</h4>
          </div>
          <div className="flex flex-col gap-4 font-serif">
            <p>
              We're a reputed company with years of experience and tradition. As
              an industry leader in the area of warehousing and logistics
              services.
            </p>
            <p>
              We believe the Code can only be implemented by working in
              partnership with our suppliers. This partnership must be based on
              trust, transparency and co-operation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
