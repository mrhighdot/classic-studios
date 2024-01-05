import React from "react";

const Hero = () => {
  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <section className="flex items-center justify-center w-full h-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7006362/pexels-photo-7006362.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="print"
          className="object-cover w-full h-full"
        />
      </section>
      {/* Hero Details Section */}
      <section className="absolute top-[50%] left-12">
        <h1 className="text-4xl sm:text-5xl">You're welcome here</h1>
      </section>
    </main>
  );
};

export default Hero;
