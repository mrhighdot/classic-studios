import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { dummyStore } from "../constants/dummyData";
import image from "assets/images/pexels-ibrahim-mersim-18966777.webp";

const Surge = () => {
  useEffect(() => {
    document.title = "Classic Studios | Blog";
  });
  return (
    <main className="grid w-full h-auto grid-cols-2 grid-rows-1 px-8 py-10">
      <section className="flex flex-col flex-wrap justify-between col-span-2 gap-4 sm:flex-row">
        {dummyStore.map(({ id, image_url, category, name, stock, price }) => {
          return (
            <section key={id} className="">
              <div className="w-[18rem] h-[12rem] rounded-lg overflow-hidden mb-4">
                <img
                  src={image_url}
                  alt="image"
                  className="object-cover w-full h-full duration-150 ease-in-out hover:scale-300"
                />
              </div>
              <span
                className={` px-4 py-2 text-[12px] rounded-full ${
                  category === "Electronics"
                    ? " text-black bg-primary"
                    : category === "Fashion"
                    ? "text-white  bg-red-600"
                    : category === "Sports"
                    ? "text-white bg-blue-600"
                    : "text-black bg-gray-100"
                }`}
              >
                {category}
              </span>
              <div className="flex flex-col gap-2 mt-4">
                <Link to={`/store/${id}`} key={id}>
                  <h5 className="text-lg">{name}</h5>
                </Link>
                <div className="flex flex-row items-center justify-between">
                  <h6 className="text-md">
                    <strong>{stock}</strong> pieces available
                  </h6>
                  <h6 className="font-bold text-md">{price}</h6>
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
