import React from "react";

const Project = ({ title, sections }) => {
  return (
    <section className="w-full p-6 sm:px-12 ">
      <article className="px-6 sm:px-[25%] sm:py-12 h-auto flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl mt-8 mb-2">{title}</h1>
        {sections.map((section, index) => {
          return (
            <section key={index}>
              {section.type === "text" && (
                <p className="mb-6">{section.content}</p>
              )}
              {section.type === "image" && (
                <section className="w-full h-[24rem] overflow-hidden rounded-lg mb-6">
                  <img
                    src={section.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </section>
              )}
            </section>
          );
        })}
      </article>
    </section>
  );
};

export default Project;
