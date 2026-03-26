import React from "react";
import { Link, useLoaderData } from "react-router";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import AppsCard from "./AppsCard";

const AppsPage = () => {
  const allApps = useLoaderData();
  //   console.log(allApps);
  return (
    <div className="mx-auto text-center m-5 p-10 bg-base-200">
      <h1 className="text-4xl font-bold">Our All Applications</h1>
      <p className="text-gray-400 my-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-8 gap-4">
        <div className="text-left w-full md:w-auto">
          <p className="font-bold">({allApps.length}) Apps Found</p>
        </div>
        <div className="form-control w-full md:w-72">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Apps"
              className="input input-bordered w-full pl-10 focus:input-primary transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {allApps.map((allApp) => (
          <AppsCard {...allApp} key={allApp.id} />
        ))}
      </div>
    </div>
  );
};

export default AppsPage;
