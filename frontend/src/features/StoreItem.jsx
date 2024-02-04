import React from "react";
import { useParams } from "react-router-dom";
import { dummyStore } from "../constants/dummyData";

const StoreItem = () => {
  const { id } = useParams();
  const selectedItem = dummyStore.find((data) => data.id === id);
  const { image_url, price, name } = selectedItem;

  return (
    <section className="w-full h-auto px-8 py-24">
      <div className="flex flex-col p-8 border gap-8 rounded-lg sm:flex-row border-slate-200 justify-normal">
        <div className="overflow-hidden h-[32rem] w-[60%] flex items-center rounded-lg justify-center">
          <img
            src={image_url}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col w-[40%] gap-3 p-4 border rounded-lg items-left border-slate-400">
          <h3 className="text-3xl">{name}</h3>
          <span className="font-bold">Gh¢ {price}</span>
          {/* <span>Proceed to checkout</span> */}
        </div>
      </div>
    </section>
  );
};

export default StoreItem;
