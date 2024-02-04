import React from "react";
import { useParams } from "react-router-dom";
import { dummyStore } from "../constants/dummyData";

const StoreItem = () => {
  const { id } = useParams();
  const selectedItem = dummyStore.find((data) => data.id === id);
  const { image_url, price, name } = selectedItem;

  return (
    <section className="w-full h-auto px-8 py-24">
      <div className="flex flex-col sm:flex-row">
        <div className="overflow-hidden h-[40%] w-[60%]">
          <img
            src={image_url}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default StoreItem;
