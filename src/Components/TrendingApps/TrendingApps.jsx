import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

const TrendingApps = () => {
  return (
    <div className="mx-auto text-center m-5 p-10">
      <h1 className="text-4xl font-bold">Trending Apps</h1>
      <p className="text-gray-400 my-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <div className="card-actions justify-between">
              <div className="btn bg-gray-200 text-green-500">
                <LuDownload />
                9M
              </div>
              <div className="btn bg-gray-100 text-orange-500">
                <FaStar />5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
