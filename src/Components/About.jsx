import React from "react";

const About = () => {
  return (
    <main className="flex justify-center items-center" id="About">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 container">
        <img
          src="/Images/art.png"
          alt="artist"
          className="lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] object-cover"
        />
        <div className="flex flex-col gap-10 justify-center items-center lg:justify-start lg:items-start">
          <h1 className="text-5xl font-bold">Art</h1>
          <p className="text-justify w-2/3">
            Art is the expression of ideas and emotions through a physical
            medium, like painting, sculpture, film, dance, writing, photography,
            or theatre. If you love the creative process, maybe you'll devote
            your life to art.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
