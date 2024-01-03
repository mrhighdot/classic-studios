import { useState, useEffect } from "react";
import { AuditRequest, Cover, SortCategory } from "../components";
import { FaArrowRight } from "react-icons/fa6";
// import client from "../client";
import { categories } from "constants/constants";
import image from "assets/images/pexels-marina-endzhirgli-18933193_1.webp";
import { Link } from "react-router-dom";
import { dummyData } from "../constants/dummyData";
import Project from "features/Project";

const Projects = () => {
  // Initialize category state

  const [posts, setPosts] = useState(dummyData);

  useEffect(() => {
    document.title = "Classic Studios | Projects";
    // client
    //   .fetch(
    //     `*[_type=="post"]{
    //   title,slug,mainImage{
    //     asset->{
    //       _id,
    //       url
    //     },
    //     alt
    //   }
    // }`
    //   )
    //   .then((data) => setPosts(data))
    //   .catch((err) => console.log(err));
  }, []);

  console.log(posts);
  const description = "Lorem";
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
          {posts.map(({ title, description }, index) => {
            return (
              <section key={index}>
                <ProjectPreview title={title} index={index} />
              </section>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Projects;

const ProjectPreview = ({ title, description, index }) => {
  return (
    <>
      <section>
        <div className="w-full flex items-center justify-center overflow-hidden h-[16rem] rounded-lg mb-4">
          <img
            src="https://images.pexels.com/photos/19084962/pexels-photo-19084962/free-photo-of-rocks-between-clouds.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            className="w-full h-full object-cover hover:scale-125 transition duration-500"
          />
        </div>
        {/* Project Details */}
        <div className="flex gap-3 flex-col">
          <Link to={`/projects/${index}`}>
            <h3 className="text-3xl">{title}</h3>
          </Link>
          <p className="">{descriptio}</p>
        </div>
      </section>
    </>
  );
};
