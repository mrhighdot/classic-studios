import { useState, useEffect } from "react";
import { AuditRequest, Cover, SortCategory } from "../components";
import { FaArrowRight } from "react-icons/fa6";
// import client from "../client";
import { categories } from "constants/constants";
import image from "assets/images/pexels-marina-endzhirgli-18933193_1.webp";
import { Link } from "react-router-dom";

const Projects = () => {
  // Initialize category state
  const [categoryIsSelected, setCategoryIsSelected] = useState(null);
  const [posts, setPosts] = useState(null);

  const dummyText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quia mollitia aut consectetur tempora fugiat quibusdam magni, suscipit numquam voluptatum libero ipsum. Hic autem error reiciendis dolor, natus reprehenderit odit!";
  const uniqueCategories = [
    ...new Set(categories.map((category) => category.name)),
  ];

  const handleFilter = (category) => {
    setCategoryIsSelected(category);
  };

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

  return (
    <main className="w-full">
      <Cover header="Our Projects" name="our-projects" image={image}>
        Solutions for business growth
      </Cover>
      {/* Header */}
      <div className="flex flex-col p-8 sm:p-[6rem] flex-wrap sm:justify-center items-center">
        <h2 className="mb-6 text-3xl text-semibold">Projects</h2>
        {/* Project Sorting */}
        <SortCategory
          categories={categories}
          handleFilter={handleFilter}
          categoryIsSelected={categoryIsSelected}
          onChange={() => {}}
        />
        {/* List of Blogs */}
        <section className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/*{/* {posts?.map((post, index) => {
            return (
              <article
                key={post.id}
                className="relative overflow-hidden rounded-lg shadow-lg shadow-slate-50"
              >
                <div className="rounded-lg">
                  {/* Image Container 
                  <div className="w-full h-64">
                    <span className="bg-[#e32185] text-white absolute top-2 left-3">
                      {post.categories}
                    </span>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Project Details 
                  <article className="p-6">
                    <div className="mb-4">
                      <h3 className="mb-2 text-2xl">{post.title}</h3>
                      <p>{dummyText.slice(0, 60) + "..."}</p>
                    </div>
                    <Link
                      to={"/projects/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span className="flex items-center gap-4 mb-4 transition text-slate-300 2000s hover:text-slate-600">
                        Learn more <FaArrowRight className="" />
                      </span>
                    </Link>
                  </article>
                </div>
              </article>
            );
          })} */}
        </section>
      </div>
    </main>
  );
};

export default Projects;
