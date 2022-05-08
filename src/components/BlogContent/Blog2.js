import React from "react";

const Blog2 = () => {
  return (
    <>
      <div className="text-justify border border-blue-700 rounded p-5 lg:text-xl">
        <div>
          <h4 className="font-semibold text-center mb-5">
            When should you use nodejs and when should you use mongodb?
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            NodeJS is suitable for building backend social media network,
            complex single page application, realtime chatbots, data streaming,
            IoT application development, REST API based application and so on.
          </p>
          <p>
            MongoDB is good choice যখন data গুলো document-centric হয়, যখন large
            amount of diverse data integrate করতে হয়, high performance
            application এর জন্য data delivery করার কাজে, ইত্যাদি।
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog2;
