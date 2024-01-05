import { useState, useEffect } from "react";
import { AuditRequest, Cover, SortCategory } from "../components";
import { FaArrowRight } from "react-icons/fa6";
// import client from "../client";
import { categories } from "constants/constants";
import image from "assets/images/pexels-marina-endzhirgli-18933193_1.webp";
import { Link } from "react-router-dom";
import { dummyData } from "../constants/dummyData";
import Project from "features/Project";

/**
 * @param {string} title - Title of the blog page card
 * @param {string} description - Blog Description
 * **/

const Projects = () => {
  // Initialize category state

  const [posts, setPosts] = useState(dummyData);

  useEffect(() => {
    document.title = "Classic Studios | Projects";
  }, []);

  console.log(posts);
  return (
    <main className="w-full">
      <Cover header="Our Projects" name="our-projects" image={image}>
        Solutions for business growth
      </Cover>
      {/* Header */}
      <div className="flex flex-col p-8 sm:p-[6rem] flex-wrap sm:justify-center items-center">
        <h2 className="mb-6 text-3xl text-semibold">Projects</h2>
        {/* List of Blogs */}
        <section className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Container */}
          {posts.map(({id,title, description, coverImg, category }, ) => {
            return (
              <section
                key={id}
                className="p-4 rounded-lg shadow-lg shadow-slate-100"
              >
                
                <div className="h-40 overflow-hidden rounded-lg mb-8">
                  <img
                    src={coverImg}
                    alt="Cover Image"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="mb-4">

                  <span className="px-4 py-2 text-xs border rounded-full border-slate-500">
                    {category}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <Link to={`/projects/${id}`}>
                    <h3 className="text-2xl">{title}</h3>
                  </Link>
                  <span className="mb-4 leading-8">
                    {description.slice(0, 30).concat("...")}
                  </span>
                </div>
              </section>
            );
          })}
          {/* {posts?.map((post, index) => {
            return <Project key={index} {...post} />;
          })} */}
        </section>
      </div>
    </main>
  );
};

export default Projects;
