import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../constants/dummyData";

const Project = ({ index }) => {
  const { id } = useParams();

  const selectedBlog = dummyData.find((data) => data.id === id);

  const { title, content } = selectedBlog;
  return (
    <section className="w-full p-6 sm:px-12 ">
      <article className="px-6 sm:px-[25%] sm:py-12 h-auto flex flex-col gap-6">
        <h1 className="mt-8 mb-2 text-4xl sm:text-5xl">{title}</h1>
        {content.map((section, index) => {
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
                    className="object-cover w-full h-full"
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
