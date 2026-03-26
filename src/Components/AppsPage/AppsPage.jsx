import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppsCard from "./AppsCard";
import AppError from "../ErrorPages/AppError";

const AppsPage = () => {
  const allApps = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 300);
  };
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
            onChange={handleSearch}
          />
        </div>
      </div>
      {isSearching ? (
        <div className="flex flex-col items-center justify-center py-20">
          <img
            src="/logo.png"
            className="w-16 h-16 animate-spin"
            alt="Loading"
          />
          <p className="mt-4 text-gray-500">Searching...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <AppsCard {...app} key={app.id} />)
          ) : (
            <div className="col-span-full flex justify-center items-center w-full">
              <AppError />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AppsPage;
