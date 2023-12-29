import { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";

const Contact = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    request: "",
  });

  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  useEffect(() => {
    document.title = "Classic Studios | Contact";
    if (!emailRegex.test(person.email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  }, [person.email]);

  return (
    <section className="w-full h-[100dvh] p-8 sm:p-[6rem] items-center leading-8 justify-start flex">
      <div className="flex gap-[5rem] flex-col sm:flex-row">
        <div className="flex flex-col sm:w-[50%]  w-full">
          <h4 className="mb-4 font-bold">FREE AUDIT</h4>
          <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">
            Ready to grow your revenue?
          </h1>
          <p className="border-b pb-4 border-b-[#303030]">
            When you partner with Brand Surge Marketing, we take care of the
            heavy lifting, so you can enjoy more website traffic, leads, and
            revenue
          </p>
          <div className="flex flex-row items-center gap-4 mt-6 ">
            <div className="w-12 h-12 bg-[#E32185] flex items-center justify-center rounded-full">
              <IoMdHeart className="w-auto h-auto text-2xl" />
            </div>
            <p className="w-[80%]">
              Review your marketing goals: Begin by reviewing your marketing
              goals and objectives.
            </p>
          </div>
        </div>
        <div className="sm:w-[50%] w-full border-2 border-[#303030] p-8 rounded-2xl">
          <h4 className="mb-4 font-bold">Get your free audit</h4>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="border-2 w-full border-[#939598] rounded-full px-4 py-1 mb-6"
              value={person.name}
              onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
            <div className="flex flex-col gap-2 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="border-2 w-full border-[#939598] rounded-full px-4 py-1 "
                value={person.email}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
                onChange={(e) =>
                  setPerson({ ...person, email: e.target.value })
                }
              />
              {!emailRegex.test(person.email) && (
                <div>
                  <span>{emailError}</span>
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="border-2 w-full border-[#939598] rounded-full px-4 py-1 mb-6"
              value={person.companyName}
              onChange={(e) =>
                setPerson({ ...person, companyName: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border-2 w-full border-[#939598] rounded-full px-4 py-1 mb-6"
              value={person.phoneNumber}
              // onChange={(e) => setPerson({ ...person, phone: e.target.value })}
              onChange={(e) =>
                setPerson({
                  ...person,
                  number: parseInt(e.target.value, 10) || "",
                })
              }
            />
            <input
              type="text"
              placeholder="What can we help you with?"
              className="border-2 w-full border-[#939598] rounded-2xl  px-4 pb-14 pt-2 mb-6"
              value={person.request}
              onChange={(e) => {
                console.log("Input value:", e.target.value);
                setPerson({ ...person, request: e.target.value });
              }}
            />
          </div>
          <button className="w-full bg-[#303030] text-white rounded-full py-3 mt-8">
            <span className="text-sm font-bold">Send me a proposal</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
