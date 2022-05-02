import React from "react";
import samsung from "../../images/suppliers/samsung.png";
import hitachi from "../../images/suppliers/hitachi.png";
import lenovo from "../../images/suppliers/lenovo.png";
import panasonic from "../../images/suppliers/panasonic.png";
import philips from "../../images/suppliers/philips.png";
import siemens from "../../images/suppliers/siemens.png";
import toshiba from "../../images/suppliers/toshiba.png";

const Suppliers = () => {
  const suppliers = [
    { id: 1, name: "SAMSUNG", img: samsung },
    { id: 2, name: "HITACHI", img: hitachi },
    { id: 3, name: "PHILIPS", img: philips },
    { id: 4, name: "SIMENSE", img: siemens },
    { id: 5, name: "TOSHIBA", img: toshiba },
    { id: 6, name: "PANASONIC", img: panasonic },
    { id: 7, name: "LENEVO", img: lenovo },
  ];
  console.log(suppliers);
  return (
    <>
      <div>
        <p className="text-left text-md lg:text-xl font-semibold mb-2">
          TOP SUPPLIERS
        </p>
      </div>
      <hr className="bg-slate-400 h-[1.5px] mb-10" />
      <div className="flex flex-col lg:flex-row gap-5 justify-evenly items-center">
        {suppliers.map((supplier) => (
          <div key={supplier.id}>
            <div className="border border-slate-400 p-4 w-fit grayscale hover:grayscale-0 transition duration-300 hover:-translate-y-1 hover:scale-110 ">
              <img className=" w-[100px]  h-4" src={supplier.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Suppliers;
