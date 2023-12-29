import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqQuestions } from "../constants/constants";

const FAQs = () => {
  // Initialize isToggle as an object with default values for each FAQ
  const [isToggle, setIsToggle] = useState(
    faqQuestions.reduce((acc, { id }) => {
      acc[id] = false; // Set default toggle state for each FAQ ID
      return acc;
    }, {})
  );

  const selectedFAQ = (id) => {
    const selectedQuestion = faqQuestions.find(
      (singleFAQ) => singleFAQ.id === id
    );
    console.log(selectedQuestion);
    return selectedQuestion;
  };

  const handleToggle = (id) => {
    const selectedID = selectedFAQ(id);
    if (selectedID) {
      setIsToggle((prevToggle) => ({
        ...prevToggle,
        [id]: !prevToggle[id],
      }));
    }
  };

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <div className="my-6 sm:my-[4rem]">
        <h5 className="mb-3 font-bold text-md">FAQ</h5>
        <h1 className="text-3xl">FAQs about Content Creation</h1>
        <span className="text-sm text-[#939598]">
          Looking to learn more about content creation for your business? Browse
          our FAQs:
        </span>
      </div>
      <div>
        {faqQuestions.map((singleFAQ) => {
          const { id, question, answer } = singleFAQ;
          return (
            <div key={id} className="flex flex-col py-4 border-y">
              <div className="flex flex-row items-center justify-between w-full mb-3">
                <span className="font-semibold">{question}</span>
                <button onClick={() => handleToggle(id)}>
                  {isToggle[id] ? <FiMinus /> : <FiPlus />}
                </button>
              </div>
              <span
                className={`leading-8 ${
                  isToggle[id]
                    ? "max-h-96 transition-max-height ease-in duration-300 overflow-hidden"
                    : "max-h-0 transition-max-height ease-out duration-300 overflow-hidden"
                }`}
              >
                {answer}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
