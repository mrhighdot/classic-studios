import React from "react";

const SortCategory = ({ categories,handleFilter,categoryIsSelected,onChange }) => {
  return (
    <div className="flex flex-row flex-wrap w-full h-auto gap-2 px-8 py-6 mb-12 sm:w-auto sm:gap-6">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="active:bg-[#303030] ease-in-out active:text-white focus:outline-none focus:bg-[#303030] focus:ring focus:text-white focus:ring-[#939598] transition 2500s border border-[#303030] px-8 py-2 rounded-full"
          >
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SortCategory;
