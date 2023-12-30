import { Link } from "react-router-dom";
import { links } from "constants/constants";
import logo from "assets/icons/brand/logo_white.png";
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex fixed w-full z-[1000] flex-col sm:flex-row items-center justify-between px-6 py-6 sm:px-12 bg-[#303030] ">
      <div className="relative flex flex-row items-center justify-between w-full sm:w-auto">
        <Link to="/">
          <img src={logo} alt="" className="w-[160px]" />
        </Link>

        {windowWidth < 640 &&
          (isOpen ? (
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white"
            >
              <span className="text-white">
                <IoClose />
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white"
            >
              <span className="text-white">
                <HiMenu />
              </span>
            </button>
          ))}
      </div>

      {windowWidth < 640 ? (
        <>
          {isOpen ? (
            <div className="absolute bg-[#303030] z-30 top-[100%] font-[500] py-6 flex sm:flex-row flex-col text-white w-full items-center sm:items-end">
              {links.map((link) => (
                <Link
                  className="font-mont font-[200] px-2 py-3 w-full rounded-full flex items-center justify-center hover:bg-primary active:bg-primary hover:text-black active:text-black transition 2500s"
                  to={link.path}
                  key={link.id}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="font-[500] px-8  hidden">
              {links.map((link) => (
                <Link
                  className="font-mont font-[200] py-3 px-5 hover:bg-primary active:bg-primary hover:text-black active:text-black transition 2500s"
                  to={link.path}
                  key={link.id}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-4 text-white">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="font-mont font-[200] py-2 px-6 rounded-full hover:bg-primary active:bg-primary hover:text-black active:text-black transition 2500s hover:rounded-full "
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
