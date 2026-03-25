import React from "react";
import heroImage from "../../assets/hero.png";
import glogo from "../../assets/fi_16076057.svg";
import ilogo from "../../assets/fi_5977575.svg";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-5xl flex flex-col items-center">
            <h1 className="text-5xl font-black font-inter">We Build</h1>
            <h1 className="text-5xl font-black font-inter">
              <span className="text-primary">Productive</span> Apps
            </h1>
            <p className="py-6 text-lg text-gray-500">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center">
              <a
                href="https://play.google.com/"
                className="btn btn-outline hover:bg-primary px-8 py-6"
                target="_blank"
              >
                <img src={glogo} alt="" /> Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                className="btn btn-outline hover:bg-primary px-8 py-6"
                target="_blank"
              >
                <img src={ilogo} alt="" /> App Store
              </a>
            </div>
            <div className="w-full flex justify-center">
              <img src={heroImage} alt="App hero image" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
