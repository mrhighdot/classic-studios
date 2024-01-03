import { useEffect } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { Navbar } from ".";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Wrong Place Though";
  });
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center w-full h-[100dvh]">
        <h1 className="mb-6 text-4xl leading-[4rem] text-center sm:text-5xl font-semibold text-black">
          Oops,
          <br /> looks like you&apos;re lost
        </h1>
        <span className="mb-6 text-lg font-bold">
          Let&apos;s go back, shall we?
        </span>
        <button className="w-[2rem] h-[2rem]" onClick={() => navigate(-1)}>
          <IoIosArrowDropleft className="w-full h-auto" />
        </button>
      </section>
    </>
  );
};

export default Error;
