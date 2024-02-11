import React from "react";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { dummyStore } from "../constants/dummyData";

const StoreItem = () => {
  const { id } = useParams();
  const selectedItem = dummyStore.find((data) => data.id === id);
  const sortedItems = dummyStore.sort(() => Math.floor(Math.random()));
  const { image_url, price, name, category } = selectedItem;

  return (
    <main className="items-center justify-center w-full h-auto px-8 py-10">
      <div className="flex flex-col justify-center gap-8 p-6 rounded-lg sm:flex-row">
        <section className="flex flex-row items-center gap-4 p-6 border rounded-lg shadow-lg border-slate-200">
          <div className="w-64 h-64 overflow-hidden rounded-lg">
            <img
              src={image_url}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-4">
            <div className="">
              <span
                className={`text-xs px-3 py-1 rounded-full ${
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
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="text-3xl sm:text-3xl">{name}</h1>
              <span className="">Gh¢ {price}</span>
              <span className="flex flex-row items-center gap-3 mt-4 text-xs text-slate-400">
                Proceed to checkout <PiArrowCircleRightFill />
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center justify-between w-full mt-6 ">
        <h2 className="mb-4 text-3xl">You may like</h2>
        <section className="flex flex-row flex-wrap justify-between w-[80%] ">
          {dummyStore
            .slice(0, 3)
            .map(({ id, image_url, category, name, stock, price }) => {
              return (
                <section key={id} className="flex flex-row gap-5">
                  <div className="w-32 h-32 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={image_url}
                      alt="image"
                      className="object-cover w-full h-full duration-150 ease-in-out hover:scale-300"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span
                      className={` px-3 py-1 text-[12px] rounded-full mb-2 ${
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
                    <div className="flex flex-col">
                      <Link to={`/store/${id}`} key={id}>
                        <h5 className="text-lg">{name}</h5>
                      </Link>
                      <div className="flex flex-col items-start">
                        <h6 className="text-md">
                          <strong>{stock}</strong> pieces available
                        </h6>
                        <h6 className="font-bold text-md">Gh¢ {price}</h6>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
        </section>
      </section>
    </main>
  );
};

export default StoreItem;
