import React from "react";

const HeroSection = () => {
  return (
    <main className="bg-[url(/Images/herobg2.jpg)] w-full h-screen bg-cover bg-center" id="Home">
      <div className="flex justify-center items-center h-full w-full container">
        <div className="lg:w-[748px] md:w-[600px] w-[314px] h-[411px] space-y-10">

          <h1 className="lg:text-[80px] md:text-[70px] text-[50px] font-medium text-white font-libre leading-none">
            Art pieces made easy accessible for everyone
          </h1>
          <p className="text-white font-medium">
            Discover the beauty of art through the power of technology
          </p>

          <button className="w-[200px] h-[50px] border-4 rounded-full bg-white text-black">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
