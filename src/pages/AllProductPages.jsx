import React from "react";

import data from "../data/data";
import Btn from "../components/SortByPricebtn";
import { BiSolidPencil } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";

const AllProductPages = () => {
  return (
    <>
      <div className="relative">
        <Btn />
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center m-24">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => (item.isCartItem = true)}
            className="w-full max-w-xl h-28 bg-slate-50 p-3 flex"
          >
            <div className="flex w-1/2">
              <img src={item.image} alt="image" className="w-1/3 h-full mr-4" />
              <div className="flex flex-col">
                <h1 className="overflow-hidden">{item.title}</h1>
                <p className="text-xs">Rs: {item.price}</p>
                <p className="mt-5">{item.rating}</p>
              </div>
            </div>
            <div className="flex flex-col h-full w-1/2 border border-stone-200 hover:shadow-2xl hover:shadow-gray-400 p-2 gap-3">
              <p className="h-2/3 overflow-hidden flex justify-end">
                {item.description}
              </p>
              <div className="items-end w-full justify-end flex gap-6">
                <button>
                  <BiSolidPencil />
                </button>
                <button>
                  <IoTrashBin />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProductPages;
