import React from "react";
import inventory from "../../images/services/inventory.jpg";
import docking from "../../images/services/docking.jpg";
import logistics from "../../images/services/logistics.jpg";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "INVENTORY CONTROL",
      img: inventory,
      description:
        "Can utilize cycle counts to analyze delivery of goods to consumers. Inventory control makes it easier to eliminate and reduce receiving errors.",
    },
    {
      id: 2,
      name: "CROSS DOCKING",
      img: docking,
      description:
        "Cross docking allows clients to route products from one or multiple manufacturing sites to a strategically located distribution center.",
    },
    {
      id: 3,
      name: "LOGISTICS SUPPORT",
      img: logistics,
      description:
        "Includes ocean, rail, road, or air transport services. Also track movement of goods from one location to another in real-time.",
    },
  ];
  return (
    <>
      <div>
        <p className="text-left text-md lg:text-xl font-semibold mb-2 text-blue-700">
          OUR SERVICES
        </p>
      </div>
      <hr className="bg-slate-400 h-[1.5px] mb-6 lg:mb-8" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {services.map((service) => (
          <div
            className="shadow-lg w-fit mx-auto p-4 rounded transition duration-300 hover:-translate-x-1 hover:scale-90"
            key={service.id}
          >
            <div>
              <img
                className="w-[250px] border-2 border-slate-300 rounded"
                src={service.img}
                alt=""
              />
            </div>
            <div>
              <h4 className="my-4 font-semibold text-md lg:text-lg">
                {service.name}
              </h4>
              <p className="w-[250px] text-justify text-slate-500">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
