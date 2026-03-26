import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppsCard from "./AppsCard";
import AppError from "../ErrorPages/AppError";

const AppsPage = () => {
  const allApps = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="mx-auto text-center m-5 p-10 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold">Our All Applications</h1>
      <p className="text-gray-400 my-4">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-8 gap-4">
        <div className="text-left w-full md:w-auto">
          <p className="font-bold text-lg">
            ({filteredApps.length}) Apps Found
          </p>
        </div>
        <div className="form-control w-full md:w-80">
          <input
            type="text"
            placeholder="Search by title..."
            className="input input-bordered w-full focus:input-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => <AppsCard {...app} key={app.id} />)
        ) : (
          <div className="col-span-full flex justify-center items-center w-full">
            <AppError />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsPage;
