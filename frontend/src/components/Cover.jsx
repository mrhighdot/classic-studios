import React from "react";

const Cover = ({image, name, children, header}) => {
  return (
    <>
      {/* Cover image */}
      <div className="w-full h-[100dvh] relative">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      {/* Text on cover Image */}
      <div className="absolute flex flex-col items-center justify-center w-full text-white sm:bottom-[6rem] bottom-7">
        <div className="sm:w-[30%] w-[80%] flex flex-col items-center justify-center ">
          <h4 className="">{header}</h4>
          <h1 className="text-4xl font-semibold text-center sm:text-5xl">
            {children}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Cover;
