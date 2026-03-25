import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

const TrendingApps = ({ TrendingProducts }) => {
  console.log(TrendingProducts);
  return (
    <div className="mx-auto text-center m-5 p-10">
      <h1 className="text-4xl font-bold">Trending Apps</h1>
      <p className="text-gray-400 my-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {TrendingProducts.slice(0, 8).map((tProduct) => (
          <div
            key={tProduct.id}
            className="card bg-base-100 shadow-xl
             hover:shadow-2xl transition-all duration-300 p-6 border border-base-200"
          >
            <figure className="px-4 pt-4">
              <img
                src={tProduct.image}
                alt={tProduct.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-1/2 md:w-1/3 lg:w-40 object-contain rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tProduct.title}</h2>
              <div className="card-actions justify-between">
                <div className="btn bg-gray-200 text-green-500">
                  <LuDownload />
                  {tProduct.downloads}
                </div>
                <div className="btn bg-gray-100 text-orange-500">
                  <FaStar />
                  {tProduct.ratingAvg}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        target="_blank"
        className="btn bg-purple-600 text-white py-5 px-8 mt-10"
      >
        Show All
      </a>
    </div>
  );
};

export default TrendingApps;
