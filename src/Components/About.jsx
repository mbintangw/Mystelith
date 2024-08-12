import React from "react";

const About = () => {
  return (
    <main className="flex justify-center items-center" id="About">
      <div className="flex justify-center items-center gap-20 container">
        <img
          src="/Images/art.png"
          alt="artist"
          className="w-[600px] h-[600px] object-cover"
        />
        <div className="space-y-10 w-[500px]">
          <h1 className="text-5xl font-bold">Art</h1>
          <p className="text-justify">
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
