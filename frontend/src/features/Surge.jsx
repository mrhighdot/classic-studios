import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { dummyStore } from "../constants/dummyData";
import image from "assets/images/pexels-ibrahim-mersim-18966777.webp";

const Surge = () => {
  useEffect(() => {
    document.title = "Classic Studios | Blog";
  });
  return (
    <main className="grid w-full h-auto grid-cols-2 grid-rows-1 px-8 py-24">
      <section className="flex flex-col flex-wrap justify-between col-span-2 gap-4 sm:flex-row">
        {dummyStore.map((store) => {
          console.log(store.image_url);
          return (
            <section key={store.id} className="">
              <div className="w-[18rem] h-[12rem] rounded-lg overflow-hidden mb-4">
                <img
                  src={image}
                  alt="image"
                  className="object-cover w-full h-full duration-150 ease-in-out hover:scale-300"
                />
              </div>
              <span
                className={` px-4 py-2 text-[12px] rounded-full ${
                  store.category === "Electronics"
                    ? " text-black bg-primary"
                    : store.category === "Fashion"
                    ? "text-white  bg-red-600"
                    : store.category === "Sports"
                    ? "text-white bg-blue-600"
                    : "text-black bg-gray-100"
                }`}
              >
                {store.category}
              </span>
              <div className="flex flex-col gap-2 mt-4">
                <Link to={`/store/${store.id}`} key={store.id}>
                  <h5 className="text-lg">{store.name}</h5>
                </Link>
                <div className="flex flex-row items-center justify-between">
                  <h6 className="text-md">
                    <strong>{store.stock}</strong> pieces available
                  </h6>
                  <h6 className="font-bold text-md">{store.price}</h6>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Surge;
