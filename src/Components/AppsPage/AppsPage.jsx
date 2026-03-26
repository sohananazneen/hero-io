import React from "react";
import { useLoaderData } from "react-router";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

const AppsPage = () => {
  const allApps = useLoaderData();
  //   console.log(allApps);
  return (
    <div className="mx-auto text-center m-5 p-10">
      <h1 className="text-4xl font-bold">Our All Applications</h1>
      <p className="text-gray-400 my-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {allApps.map((allApp) => {
          const { id, image, title, downloads, ratingAvg } = allApp;
          return (
            <div
              key={id}
              className="card bg-base-100 shadow-xl
             hover:shadow-2xl transition-all duration-300 p-6 border border-base-200"
            >
              <figure className="px-4 pt-4">
                <img
                  src={image}
                  alt={title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="size-full object-cover object-top rounded-2xl hover:scale-105 transition-all duration-500"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                  <div className="btn bg-gray-200 text-green-500">
                    <LuDownload />
                    {downloads}
                  </div>
                  <div className="btn bg-gray-100 text-orange-500">
                    <FaStar />
                    {ratingAvg}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppsPage;
