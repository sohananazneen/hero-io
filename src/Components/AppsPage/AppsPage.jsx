import React from "react";
import { Link, useLoaderData } from "react-router";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import AppsCard from "./AppsCard";

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
        {allApps.map((allApp) => (
          <AppsCard {...allApp} key={allApp.id} />
        ))}
      </div>
    </div>
  );
};

export default AppsPage;
